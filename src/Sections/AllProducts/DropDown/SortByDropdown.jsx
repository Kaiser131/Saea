import { FiChevronDown, } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import Option from "./Option";

const SortByDropdown = ({ dropBtnText, setDropdownData, dropDownOptionsData, setCurrentPage }) => {

    const [open, setOpen] = useState(false);

    const handleDropDownOptionData = (text) => {

        setDropdownData(text);
        setOpen(false);
    };


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
                    className="flex flex-col gap-2 p-2 rounded-lg shadow-2xl top-[120%] left-[30%] w-48 absolute z-50 bg-[#D8D8D8]"
                >

                    {
                        dropDownOptionsData?.map((got, idx) => (
                            <Option key={idx} handleDropDownOptionData={handleDropDownOptionData} setOpen={setOpen} Icon={got.icon} text={got.name} ></Option>
                        ))
                    }

                </motion.ul>
            </motion.div>
        </div>
    );
};



export default SortByDropdown;



