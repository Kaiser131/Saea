// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://stripe.com/docs/payments/accept-a-payment#web


import './PaymentCheckOutForm.css';
import SpotlightButton from '../Shared/HoverBtn';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const PaymentCheckOutForm = ({ setOpen, open, cartTotalPrice, buyingProduct }) => {
    const stripe = useStripe();
    const elements = useElements();

    const { user } = useAuth();

    const [clientSecret, setClientSecret] = useState();
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        // fetch client secret
        if (cartTotalPrice?.totalPrice && cartTotalPrice?.totalPrice > 1) {
            getClientSecret({ price: cartTotalPrice?.totalPrice });
        }

    }, [cartTotalPrice?.totalPrice]);

    // get client secret
    const getClientSecret = async price => {
        const { data } = await axios.post(`http://localhost:5000/create-payment-intent`, price);
        setClientSecret(data?.clientSecret);
        // return data;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);


        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
            setProcessing(false);
            return;
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
        }

        // confirm payment

        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName,
                    buyingProduct: buyingProduct
                }
            }
        });

        if (confirmError) {
            console.log(confirmError);
            setCardError(confirmError.message);
            setProcessing(false);
            return;

        }


        if (paymentIntent.status === 'succeeded') {
            console.log(paymentIntent);

            // create payment info
            const paymentInfo = {
                name: user?.displayName,
                email: user?.email,
                payment: cartTotalPrice,
                transactionId: paymentIntent.id,
                date: new Date()
            };
            console.log(paymentInfo);

            // save payment info in booking collection (db)

        }
        setProcessing(false);
    };



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                {/* <button type="submit" disabled={!stripe}>
                Pay
            </button> */}


            </form>

            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}

        </>
    );
};

export default PaymentCheckOutForm;