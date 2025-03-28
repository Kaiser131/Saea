import { useEffect, useState } from "react";
import ToDoHeader from "../../Component/Shared/ToDo/ToDoHeader";
import { motion } from 'framer-motion';
import useAuth from "../../hooks/useAuth";
import { FiClock, FiTrash2 } from "react-icons/fi";
import ToDoList from "../../Component/Shared/ToDo/ToDoList";
import ToDoSubmit from "../../Component/Shared/ToDo/ToDoSubmit";
import GuestCharts from "../../Component/Shared/Charts/GuestCharts";
import { FaBoxOpen, FaDollarSign, FaOpencart } from "react-icons/fa";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const GuestDashboard = () => {

    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [date, setDate] = useState("");

    useEffect(() => {
        const today = new Date();
        const options = { year: "numeric", month: "long", day: "numeric" };
        setDate(today.toLocaleDateString("en-US", options));
    }, []);

    const [todos, setTodos] = useState([]);

    const handleCheck = (id) => {
        setTodos((pv) =>
            pv.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
        );
    };

    const removeElement = (id) => {
        setTodos((pv) => pv.filter((t) => t.id !== id));
    };

    const fakeTodo = [
        { todo: 'Check and respond to emails', time: '1 hr' },
        { todo: 'Attend team meeting at 3 PM', time: '45 min' },
        { todo: 'Meal prep for the week', time: '2 hr' },
        { todo: 'Replace broken lightbulbs', time: '20 min' },
    ];

    const { data: guestData = [], isLoading } = useQuery({
        queryKey: ['guestDashboard', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/guest_dash/${user?.email}`);
            return data;
        }
    });


    if (loading || isLoading) return <Loading />;

    return (
        <div className="w-full min-h-screen p-10 bg-[#D8D8D8]">
            <div className="max-w-screen-2xl mx-auto">

                {/* top data box */}
                <div className=" md:flex md:justify-between gap-10 mt-10 text-white">
                    <div className="md:flex gap-10 my-5 md:my-0 grid grid-cols-2">
                        {/* total product */}
                        <div className="p-5 bg-[#262626] space-y-1 font-sirin md:max-h-36 max-w-44 rounded shadow-2xl">
                            <p className="">Total Purchase</p>
                            <p className=" text-3xl md:text-4xl font-bold flex items-center gap-3 ">{guestData?.totalPurchase} <FaBoxOpen /> </p>
                            <p className="">{date}</p>
                        </div>
                        {/* total sell */}
                        <div className="p-5 bg-[#262626] space-y-1 font-sirin md:max:h-36 max-w-44 rounded shadow-2xl">
                            <p className="">Total Item</p>
                            <p className=" text-3xl md:text-4xl font-bold flex items-center gap-3 ">{guestData?.totalItem} <FaOpencart /> </p>
                            <p className="">{date}</p>
                        </div>
                        {/* total revenue */}
                        <div className="p-5 bg-[#262626] space-y-1 font-sirin md:max:h-36 max-w-44 rounded shadow-2xl">
                            <p className="">Total Spent...</p>
                            <p className=" text-3xl md:text-4xl font-bold flex items-center gap-3 ">{guestData?.totalSpent} <FaDollarSign /> </p>
                            <p className="">{date}</p>
                        </div>
                    </div>


                    {/* Host Data */}
                    <div className="flex gap-10">
                        <Link to='/dashboard/profile'>
                            <div className="md:flex md:flex-col hidden justify-center items-center space-y-8">
                                <img src={user?.photoURL} className="size-20 rounded" alt="No Image found" />
                                <p className="font-lexend text-black">{user?.displayName}</p>
                            </div>
                        </Link>
                    </div>
                </div>


                {/* middle site */}

                <div className="flex flex-col md:flex-row my-20 justify-between">

                    {/* todoList */}
                    <section className="max-w-[1000px] w-full flex flex-col py-5">
                        <div className="w-full px-4 flex-grow">
                            <ToDoHeader />

                            {todos?.length === 0 &&
                                <div className="space-y-3">

                                    {
                                        fakeTodo.map((got, idx) => (
                                            <motion.div
                                                key={idx}
                                                layout
                                                className="relative flex shadow-2xl w-full items-center gap-3 rounded border border-zinc-700 bg-zinc-900 p-3"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="size-4 accent-indigo-400"
                                                />

                                                <p
                                                    className={`text-white transition-colors`}
                                                >
                                                    {got?.todo}
                                                </p>
                                                <div className="ml-auto flex gap-1.5">
                                                    <div className="flex items-center gap-1.5 whitespace-nowrap rounded bg-zinc-800 px-1.5 py-1 text-xs text-zinc-400">
                                                        <FiClock />
                                                        <span>{got?.time}</span>
                                                    </div>
                                                    <button
                                                        className="rounded bg-red-300/20 px-1.5 py-1 text-xs text-red-300 transition-colors hover:bg-red-600 hover:text-red-200"
                                                    >
                                                        <FiTrash2 />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))
                                    }

                                </div>
                            }



                            <ToDoList removeElement={removeElement} todos={todos} handleCheck={handleCheck} />
                        </div>
                        <div className="mt-5 w-full flex justify-center">
                            <ToDoSubmit setTodos={setTodos} />
                        </div>
                    </section>


                    <div>
                        <GuestCharts />
                    </div>

                </div>



            </div>
        </div>
    );
};

export default GuestDashboard;