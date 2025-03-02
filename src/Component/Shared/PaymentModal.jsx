import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useMutation, useQuery } from '@tanstack/react-query';
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


const PaymentModal = ({ open, setOpen }) => {

    const { user, loading } = useAuth();

    const axiosSecure = useAxiosSecure();

    // total price
    const { data: cartTotalPrice = [] } = useQuery({
        queryKey: ['cartDataInfo', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/cartDataInfo/${user?.email}`);
            return data;
        },
    });


    // cart data
    const { data: purchasedData = [], isLoading, refetch } = useQuery({
        queryKey: ['cartData', user?.email],
        queryFn: async () => {
            const { data: product } = await axiosSecure.get(`/cartData/${user?.email}`);
            return product;
        }
    });



    // purchse Data
    const { mutateAsync } = useMutation({
        mutationFn: async (purchaseData) => {
            const { data } = await axiosSecure.post('/purchase', purchaseData);
            return data;
        },
        onSuccess: () => {
            refetch();
            toast.success('Payed Successfully !');
        }
    });

    // delete Cart after buy
    const { mutateAsync: deleteCartData } = useMutation({
        mutationFn: async () => {
            const { data } = await axiosSecure.delete('/cartDelete');
            return data;
        },
    });


    const handlePaying = async () => {
        // const purchaseData = {
        //     ...purchasedData,
        //     purchaseUserEmail: user?.email,
        //     totalPrice,
        //     quantity,
        //     purchaseDate: Date.now()
        // };

        await mutateAsync(purchasedData);
        await deleteCartData();
        refetch();
        setOpen(!open);
    };

    if (loading || isLoading) return <Loading />;

    return (
        <div>
            <Dialog open={open} as="div" className="relative z-10 focus:outline-none" onClose={() => setOpen(!open)} __demoMode>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-[#8C8C8C] bg-opacity-80 ">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded bg-[#BEBEBE] p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className=" text-2xl text-center my-5 font-light">
                                Review
                            </DialogTitle>
                            {purchasedData.map(got => (<div className='flex justify-between px-10' key={got?._id}>
                                <p className='font-raleway'>{got?.name}</p>
                                <p>{got?.totalPrice}</p>
                            </div>))}

                            <div className='mt-2 border-t border-black ' />
                            <div>
                                <p className='text-right mr-5'>Total: {cartTotalPrice?.totalPrice}</p>
                            </div>

                            <div className="mt-4">

                                {/* user Details */}
                                <div className='font-raleway space-y-1'>
                                    <p>{user?.displayName}</p>
                                    <p>Email: {user?.email}</p>
                                    <p>Payment: {cartTotalPrice?.totalPrice}</p>
                                </div>

                                {/* checkOut form */}
                                <Elements stripe={stripePromise}>
                                    <PaymentCheckOutForm buyingProduct={purchasedData} cartTotalPrice={cartTotalPrice} setOpen={setOpen} open={open} />
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

export default PaymentModal;
