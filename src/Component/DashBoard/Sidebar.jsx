import { FiBarChart, FiDollarSign, FiHome, FiMonitor, FiShoppingCart, FiTag, FiUsers } from "react-icons/fi";
import Option from "./Option";
import ToggleClose from "./ToggleClose";
import TitleSection from "./TitleSection";
import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState("Dashboard");

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
                <Option
                    Icon={FiHome}
                    title="Home"
                    selected={selected}
                    setSelected={setSelected}
                    open={open}
                    location='/'
                />
                <Option
                    Icon={FiDollarSign}
                    title="Sales"
                    selected={selected}
                    setSelected={setSelected}
                    open={open}
                    notifs={3}
                />
                <Option
                    Icon={FiMonitor}
                    title="View Site"
                    selected={selected}
                    setSelected={setSelected}
                    open={open}
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
                    Icon={FiTag}
                    title="Tags"
                    selected={selected}
                    setSelected={setSelected}
                    open={open}
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
                />
            </div>

            <ToggleClose open={open} setOpen={setOpen} />
        </motion.nav>
    );
};

export default Sidebar;