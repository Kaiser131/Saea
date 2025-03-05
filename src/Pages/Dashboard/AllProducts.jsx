import { useMutation, useQuery } from "@tanstack/react-query";
import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";
import toast from "react-hot-toast";

const AllProducts = () => {

    const { loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data = [], refetch, isLoading } = useQuery({
        queryKey: ['manageAllProduct'],
        queryFn: async () => {
            const { data } = await axiosSecure('/watch');
            return data;
        }
    });

    const { mutateAsync } = useMutation({
        mutationFn: async (id) => {
            const { data } = await axiosSecure.delete(`/watch/${id}`);
            return data;
        },
        onSuccess: () => {
            refetch();
            toast.success('Watch Deleted Successfully !');
        }
    });

    const handleDelete = async (id) => {

        try {
            await mutateAsync(id);
        } catch (error) {
            toast.error("Couldn't Delete !");
        }
    };


    if (loading, isLoading) return <Loading />;

    return (
        <div>

            <div>
                <h1 className="text-2xl md:text-4xl font-lexend text-center py-10 ">Total Items {data?.length}</h1>
            </div>

            <table className="max-w-[1000px] w-full mx-auto divide-y  text-black">

                <thead className="bg-[#d1cfcf] font-lexend ">
                    <tr>

                        <th scope="col">
                        </th>

                        <th
                            scope="col"
                            className="py-3.5 text-xs font-normal text-left">
                            <span>Name</span>
                        </th>

                        <th
                            scope="col"
                            className="px-4 py-3.5 hidden md:block text-xs font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <span>Price</span>
                        </th>

                        <th
                            scope="col"
                            className="px-4 py-3.5 text-xs font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                            Email address
                        </th>

                        <th
                            scope="col"
                            className="px-4 py-3.5 hidden md:block text-xs font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                            Brand
                        </th>

                        <th scope="col" className="relative py-3.5 px-4">
                            <span className=""></span>
                        </th>

                    </tr>
                </thead>

                {data.map(tabData => (
                    <tbody key={tabData?._id} className="bg-[#d1cfcf]">

                        <tr className="">

                            <td>
                                <div
                                    style={{ backgroundImage: `url(${tabData?.image})` }}
                                    className="size-9 md:size-20 bg-cover bg-center m-2 md:m-5 rounded-sm" />
                            </td>

                            <td className="py-4 text-sm font-medium">
                                <div className="flex flex-col font-lexend py-1">
                                    <h2 className="text-xs md:text-xl font-normal">{tabData?.name}</h2>
                                    <h2 className="text-xs font-normal">{tabData?.category}</h2>
                                </div>
                            </td>

                            <td className="px-4 hidden md:table-cell py-4 text-sm text-center align-middle">
                                <div className="flex justify-center items-center h-full whitespace-nowrap">
                                    {tabData?.price} $
                                </div>
                            </td>

                            <td className="px-2 md:px-4 py-4">
                                <div className="text-xs md:text-sm break-all">
                                    {tabData?.submittedBy}
                                </div>
                            </td>

                            <td className="px-4 hidden md:table-cell py-4 text-sm text-center align-middle">
                                <div className="flex justify-center items-center h-full">
                                    {tabData?.brand}
                                </div>
                            </td>



                            <td className="px-4 py-4 text-sm">
                                <div className="flex items-center gap-x-6">
                                    <button onClick={() => handleDelete(tabData?._id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                        <FaRegTrashAlt className="text-sm md:text-xl" />
                                    </button>
                                    <button className="text-gray-500 hidden md:block transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </td>

                        </tr>

                    </tbody>
                ))}

            </table>

        </div>
    );
};

export default AllProducts;