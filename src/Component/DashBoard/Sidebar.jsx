import { FiBarChart, FiHome, FiShoppingCart, FiUsers } from "react-icons/fi";
import Option from "./Option";
import ToggleClose from "./ToggleClose";
import TitleSection from "./TitleSection";
import { useState } from "react";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { FaBoxOpen } from "react-icons/fa";
import { MdWatch } from "react-icons/md";
import { IoPower } from "react-icons/io5";
import { FaDropbox } from "react-icons/fa6";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Sidebar = ({ open, setOpen }) => {

    const [selected, setSelected] = useState("Dashboard");

    const { user, logOut } = useAuth();
    const handleLogOut = () => [
        logOut(),
        toast.success('Log Out Successfully')
    ];

    return (
        <motion.nav
            layout
            className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-[#BEBEBE] p-2"
            style={{
                width: open ? "225px" : "fit-content",
            }}
        >
            <TitleSection open={open} />

            <div className="space-y-1">
                <div>
                    <Option
                        Icon={FiHome}
                        title="Home"
                        selected={selected}
                        setSelected={setSelected}
                        open={open}
                        location='/'
                    />
                    <Option
                        Icon={CgProfile}
                        title="Profile"
                        selected={selected}
                        setSelected={setSelected}
                        open={open}
                        location='profile'
                    />
                    <Option
                        Icon={MdWatch}
                        title="Watches"
                        selected={selected}
                        setSelected={setSelected}
                        open={open}
                        location='/products'
                    // notifs={3}
                    />
                    <Option
                        Icon={FiShoppingCart}
                        title="My Cart"
                        selected={selected}
                        setSelected={setSelected}
                        open={open}
                        location='myCart'
                    />
                    <Option
                        Icon={FaBoxOpen}
                        title="Add Product"
                        selected={selected}
                        setSelected={setSelected}
                        open={open}
                        location='addProduct'
                    />
                    <Option
                        Icon={FiBarChart}
                        title="Analytics"
                        selected={selected}
                        setSelected={setSelected}
                        open={open}
                    />
                    <Option
                        Icon={FiUsers}
                        title="Members"
                        selected={selected}
                        setSelected={setSelected}
                        open={open}
                        location='allUsers'
                    />
                    <Option
                        Icon={FaDropbox}
                        title="Products"
                        selected={selected}
                        setSelected={setSelected}
                        open={open}
                        location='allProduct'
                    />
                </div>

                <div>

                    {
                        user ?
                            <span onClick={handleLogOut} className="absolute bottom-16 w-[calc(100%-20px)]">
                                <Option
                                    Icon={IoPower}
                                    title="Log Out"
                                    setSelected={setSelected}
                                    open={open}
                                />
                            </span> :
                            <span className="absolute bottom-16 w-[calc(100%-20px)]">
                                <Option
                                    Icon={IoPower}
                                    title="Login"
                                    setSelected={setSelected}
                                    open={open}
                                    location='/login'
                                />
                            </span>
                    }


                </div>

            </div>

            <ToggleClose open={open} setOpen={setOpen} />
        </motion.nav>
    );
};

export default Sidebar;