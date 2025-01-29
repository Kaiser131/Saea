import {
    FiEdit,
    FiChevronDown,
    FiTrash,
    FiShare,
    FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import Option from "./Option";

const DropDown = ({ dropBtnText }) => {
    const [open, setOpen] = useState(false);

    const wrapperVariants = {
        open: {
            scaleY: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
        closed: {
            scaleY: 0,
            transition: {
                when: "afterChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const iconVariants = {
        open: { rotate: 180 },
        closed: { rotate: 0 },
    };



    return (
        <div className=" flex items-center justify-center relative   ">
            <motion.div animate={open ? "open" : "closed"} className="relative">
                <button
                    onClick={() => setOpen((pv) => !pv)}
                    className="flex  font-lexend py-4 px-5 md:px-[70px]  items-center whitespace-nowrap  "
                >
                    <span className="font-light">{dropBtnText}</span>
                    <motion.span variants={iconVariants}>
                        <FiChevronDown />
                    </motion.span>
                </button>

                <motion.ul
                    initial={wrapperVariants.closed}
                    variants={wrapperVariants}
                    style={{ originY: "top", translateX: "-50%" }}
                    className="flex flex-col gap-2 p-2 rounded-lg shadow-2xl absolute top-[120%] left-[70%] w-48 overflow-hidden"
                >
                    <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
                    <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
                    <Option setOpen={setOpen} Icon={FiShare} text="Share" />
                    <Option setOpen={setOpen} Icon={FiTrash} text="Remove" />
                </motion.ul>
            </motion.div>
        </div>
    );
};



export default DropDown;



