import { FiChevronDown, } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import Option from "./Option";
import ClearOption from "../../../Component/AllProduct/ClearOption";
import { IoInfiniteSharp } from "react-icons/io5";

const FilterDropdown = ({ dropBtnText, dropDownOptionsData, setCurrentPage, setFilterDropdownData, setSortByDropdownData, setSearch }) => {

    const [open, setOpen] = useState(false);

    const handleDropDownOptionData = (text) => {
        setCurrentPage(1);
        setFilterDropdownData(text);
        setOpen(false);
    };

    const handleCLear = () => {
        setFilterDropdownData(''),
            setSortByDropdownData(''),
            setSearch('');
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
        <div className=" flex items-center justify-center relative z-50 ">
            <motion.div animate={open ? "open" : "closed"} className="relative">
                <button
                    onClick={() => setOpen((pv) => !pv)}
                    className="flex font-lexend py-4 px-5 md:px-[70px]  items-center whitespace-nowrap  "
                >
                    <span className="font-light text-black">{dropBtnText}</span>
                    <motion.span variants={iconVariants}>
                        <FiChevronDown />
                    </motion.span>
                </button>

                <div className="relative z-50">
                    <motion.ul
                        initial={wrapperVariants.closed}
                        variants={wrapperVariants}
                        style={{ originY: "top", translateX: "-50%" }}
                        className="flex flex-col gap-2 p-2 rounded-lg shadow-2xl top-[120%] left-[130%] lg:left-[70%] w-48 absolute z-50 bg-[#D8D8D8]"
                    >
                        {dropDownOptionsData?.map((got, idx) => (
                            <Option key={idx} handleDropDownOptionData={handleDropDownOptionData} setOpen={setOpen} Icon={got.icon} text={got.name} />
                        ))}
                        <ClearOption handleCLear={handleCLear} Icon={IoInfiniteSharp} text="All" />
                    </motion.ul>
                </div>
            </motion.div>
        </div>
    );
};



export default FilterDropdown;



