
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useMutation } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import SpotlightButton from './HoverBtn';

// react stripe js
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentCheckOutForm from '../Forms/PaymentCheckOutForm';
import Loading from '../../Pages/Loading/Loading';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);


const BuyModal = ({ open, setOpen, product }) => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();




    // booking Data
    const { mutateAsync } = useMutation({
        mutationFn: async (purchaseData) => {
            const { data } = await axiosSecure.post('/purchaseNow', purchaseData);
            return data;
        },
        onSuccess: () => {
            toast.success('Payed Successfully !');
        }
    });

    const { SKU, category, details, image, name, price, email, submittedBy } = product;

    const handlePaying = async () => {
        const purchaseData = {
            purchaseUserEmail: email,
            SKU,
            user: user?.email,
            category,
            details,
            image,
            submittedBy,
            name,
            quantity: 1,
            totalPrice: price,
            purchaseDate: Date.now()
        };
        await mutateAsync(purchaseData);
        setOpen(!open);
    };

    if (loading) return <Loading />;
    return (
        <div>
            <Dialog open={open} as="div" className="relative z-10 focus:outline-none text-black" onClose={() => setOpen(!open)} __demoMode>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-[#8C8C8C] bg-opacity-80 ">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded bg-[#BEBEBE] p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className=" text-2xl text-center my-5 font-light">
                                Review
                            </DialogTitle>
                            <div className='flex justify-between px-5'>
                                <p className='font-raleway'>{product?.name}</p>
                                <p>{product?.price}</p>
                            </div>

                            <div className='mt-2 border-t border-black ' />
                            <div>
                                <p className='text-right mr-5'>Total: {product?.price}</p>
                            </div>

                            <div className="mt-4">

                                {/* user Details */}
                                <div className='font-raleway space-y-1'>
                                    <p>{user?.displayName}</p>
                                    <p>Email: {user?.email}</p>
                                    <p>Payment: {product?.price}</p>
                                </div>

                                {/* checkOut form */}
                                <Elements stripe={stripePromise}>
                                    <PaymentCheckOutForm />
                                </Elements>

                                <span className='flex justify-center mt-10'
                                    onClick={handlePaying}>
                                    <SpotlightButton name='Pay' />
                                </span>

                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default BuyModal;



