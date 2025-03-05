import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import useRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";
import { FaTrash } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";

const AllUsers = () => {


    const { isLoading: roleLoading, role: myRole } = useRole();

    const axiosSecure = useAxiosSecure();

    const [role, setRole] = useState(null);
    const { loading } = useAuth();

    const { data = [], refetch, isLoading } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const { data: users } = await axiosSecure.get('/usersData');
            return users;
        }
    });

    const { mutateAsync } = useMutation({
        mutationFn: async (role) => {
            const { data } = await axiosSecure.patch('/user', role);
            return data;
        },
        onSuccess: () => {
            toast.success('Role Updated !');
            refetch();
            setRole(null);
        }
    });



    const handleUpdate = async (user) => {
        const updateInfo = {
            role: role,
            email: user?.email,
            status: 'Verified'
        };
        await mutateAsync(updateInfo);
        refetch();
    };

    if (loading || isLoading || roleLoading) return <Loading />;


    return (
        <div className="min-h-screen w-full text-black">

            <div>
                <h1 className="text-2xl md:text-4xl font-lexend text-center py-10 ">Manage Users</h1>

                <div className=" max-w-[1000px] mx-auto">
                    <table className=" w-full">
                        {/* heading */}
                        <thead>
                            <tr className="">
                                <th className="text-xs font-semibold font-raleway w-[12.28%]"></th>
                                <th className="text-xs font-semibold font-raleway w-[26.28%]">email</th>
                                <th className="text-xs font-semibold font-raleway w-[12.28%]">role</th>
                                <th className="text-xs font-semibold font-raleway w-[12.28%]">status</th>
                                <th className="text-xs font-semibold font-raleway w-[12.28%]">update</th>
                                <th className="text-xs font-semibold font-raleway w-[12.28%]">action</th>
                                <th className="text-xs font-semibold font-raleway w-[12.28%] hidden md:block"></th>
                            </tr>
                        </thead>

                        {/* body */}
                        <tbody className="border-b border-black w-full">
                            {data.map(user => (
                                <tr key={user?._id} className="w-full text-xs md:text-base">
                                    <td className="pl-5">
                                        <img src={user?.image} className="mx-auto hidden md:block size-12 rounded" loading="lazy" alt="" />
                                    </td>
                                    <td className="text-center py-4 break-all md:whitespace-nowrap">{user?.email}</td>
                                    <td className={`text-center py-4 
                                        ${user?.role === 'guest' ? 'text-green-600' : 'text-blue-600'} 
                                        ${user?.role === 'admin' && 'text-red-700'} `}>{user?.role}</td>
                                    <td className={`text-center py-4 ${user?.status === 'Verified' ? 'text-blue-600' : 'text-red-600'} `}>
                                        {user?.status}
                                    </td>
                                    <td className="text-center py-4">
                                        <select onChange={(e) => setRole(e.target.value)} className="bg-transparent outline-none">
                                            <option className="bg-[#BEBEBE]" disabled selected>Role</option>
                                            <option className="bg-[#BEBEBE]" value="host">Host</option>
                                            <option className="bg-[#BEBEBE]" value="guest">Guest</option>
                                            <option className="bg-[#BEBEBE]" value="admin">Admin</option>
                                        </select>
                                    </td>
                                    <td className="text-center">
                                        <button
                                            disabled={role === null || myRole !== 'admin'}
                                            onClick={() => handleUpdate(user)}
                                            className="font-lexend disabled:cursor-not-allowed mr-5 md:mr-0 mx-auto block">
                                            Update
                                        </button>
                                    </td>

                                    <td className="text-center py-4 text-2xl hidden md:block">
                                        <button><IoTrashBinSharp className="text-xl" /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    );
};

export default AllUsers;