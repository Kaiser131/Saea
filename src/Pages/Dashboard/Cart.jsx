import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { RxCross2 } from "react-icons/rx";
import WhiteFillupBtn from '../../Component/Shared/WhiteFillupBtn';

const Cart = () => {

    const { user } = useAuth();


    const { data = [] } = useQuery({
        queryKey: ['cartData', user?.email],
        queryFn: async () => {
            const { data: product } = await axios.get(`http://localhost:5000/cartData/${user?.email}`);
            return product;
        }
    });


    // reseting now

    return (
        <div>
            <div className='flex justify-between'>


                {/* left div */}
                <div className='w-2/3'>

                    {/* heading div */}
                    <div>
                        <div className="flex p-10 justify-between py-5 border-b border-black">
                            <h1 className="font-lexend text-3xl font-bold">Shopping Cart</h1>
                            <p className="font-lexend">{data.length} Items</p>
                        </div>
                    </div>



                    {/* table div */}
                    <div className=' max-w-[800px] mx-auto'>
                        <table className="border-collapse my-5 w-full">
                            <thead className="uppercase w-full">
                                <tr className="w-full">
                                    <th className="py-4 text-xs font-semibold font-raleway text-left w-[16.6%]">Product</th>
                                    <th className="py-4 text-xs font-semibold font-raleway w-[16.6%]"></th>
                                    <th className="py-4 text-xs font-semibold font-raleway w-[16.6%]">Quantity</th>
                                    <th className="py-4 text-xs font-semibold font-raleway w-[16.6%]">Price</th>
                                    <th className="py-4 text-xs font-semibold font-raleway w-[16.6%]">Total</th>
                                    <th className="py-4 text-xs font-semibold font-raleway w-[16.6%]">Action</th>
                                </tr>
                            </thead>

                            {data.map((product) => (
                                <tbody key={product._id} className="border-b border-black w-full">
                                    <tr className="w-full">
                                        <td className="py-4 w-[16.6%]">
                                            <div
                                                className="w-20 h-20 bg-center bg-cover rounded"
                                                style={{ backgroundImage: `url('${product?.image}')` }}
                                            />
                                        </td>
                                        <td className="py-4 w-[16.6%]">
                                            <div>
                                                <h1 className="font-semibold">{product?.name}</h1>
                                                <p className="text-gray-500">{product?.category}</p>
                                            </div>
                                        </td>
                                        <td className="text-center py-4 w-[16.6%]">{product?.quantity}</td>
                                        <td className="text-center py-4 w-[16.6%]">${product?.price}</td>
                                        <td className="text-center py-4 w-[16.6%]">${product?.totalPrice}</td>
                                        <td className="text-center py-4 text-2xl w-[16.6%]">
                                            <button><RxCross2 /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>


                </div>



                {/* right div */}
                <div className=' w-1/3 '>

                    <div className='bg-[#BEBEBE] flex justify-center items-center h-screen '>

                        <div className="flex-[35%] justify-center items-center mx-auto p-10">

                            <div className="border-b pb-5 border-black space-y-5">
                                <h1 className="font-lexend text-3xl font-bold">Order Summary</h1>
                                <p className="font-lexend">Items {data.length}</p>
                            </div>

                            <form className='flex space-y-5 flex-col my-10'>
                                <h1 className='text-2xl font-semibold'>Promo Code</h1>
                                <input type="text" name="promo" placeholder='Enter Your Code' className='bg-[#BEBEBE] placeholder:text-black  py-2 border-b border-black outline-none' id="" />
                                <button className='border w-28 px-4 py-2 border-black '>APPLY</button>
                            </form>

                            <div className=' border-t border-black'>
                                <div className='my-5 flex justify-evenly'>
                                    <h1>Total Cost </h1>
                                    <h1>12 $</h1>
                                </div>
                                <WhiteFillupBtn text='Buy Now' size={240} />
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default Cart;