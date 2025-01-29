import queryString from "query-string";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);
    const navigate = useNavigate();


    const handleClick = () => {


        let currentQuery = { category: children };
        const url = queryString.stringifyUrl({
            url: '/',
            query: currentQuery
        });
        navigate(url);
    };

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className='relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base '
        >
            <button className="px-4 " onClick={handleClick}> {children}</button>
        </li>
    );
};

export default Tab;