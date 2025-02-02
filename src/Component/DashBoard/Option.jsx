import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Option = ({ Icon, title, selected, setSelected, open, notifs, location }) => {
    return (

        <Link to={location}>
            <motion.button
                layout
                onClick={() => setSelected(title)}
                className={` relative flex h-10 w-full items-center rounded-md transition-colors ${selected === title ? "bg-[#D8D8D8] text-black" : "text-slate-500 hover:bg-[#ACACAC] hover:text-indigo-950"}`}
            >
                <motion.div
                    layout
                    className="grid h-full w-10 place-content-center text-lg"
                >
                    <Icon />
                </motion.div>
                {open && (
                    <motion.span
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.125 }}
                        className="text-xs  font-medium"
                    >
                        {title}
                    </motion.span>
                )}

                {notifs && open && (
                    <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        style={{ y: "-50%" }}
                        transition={{ delay: 0.5 }}
                        className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
                    >
                        {notifs}
                    </motion.span>
                )}
            </motion.button>
        </Link>

    );
};


export default Option;