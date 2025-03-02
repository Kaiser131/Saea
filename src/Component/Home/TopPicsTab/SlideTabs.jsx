import { useState } from "react";
import Cursor from "./Cursor";
import Tab from "./Tab";

const SlideTabs = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    const [idxNum, setIdxNum] = useState();

    const tabItems = ['Luxury', 'Casual', 'Smartwatches', 'Sports'];

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative mx-auto flex w-fit  border-black bg-[#D8D8D8] "
        >
            {tabItems.map((got, idx) => (
                <Tab key={idx} idx={idx} idxNum={idxNum} setIdxNum={setIdxNum} setPosition={setPosition} >{got}</Tab>
            ))}

            <Cursor position={position} />
        </ul>
    );
};

export default SlideTabs;