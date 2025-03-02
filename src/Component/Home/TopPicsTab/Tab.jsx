import queryString from "query-string";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Tab = ({ children, setPosition, idx, setIdxNum, idxNum }) => {
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
            onClick={() => setIdxNum(idx)}

            className={`relative z-10 block cursor-pointer hover:border-b-0 px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base ${idx === idxNum ? 'border-b-[1px]' : ''} `}
        >
            <button className="px-2 md:px-4 " onClick={handleClick}> {children}</button>
        </li>
    );
};

export default Tab;