import { motion } from "framer-motion";
import splitStringUsingRegex from "../../Utils/splitString";



const TextBanner = ({ heading = '', subHeading = '' }) => {

    const headingChars = splitStringUsingRegex(heading);
    const subHeadingChars = splitStringUsingRegex(subHeading);


    const charVariants = {
        hidden: { opacity: 0 },
        reveal: { opacity: 1 }
    };


    return (
        <div className=" my-14 max-w-[1000px] px-10 mx-auto text-center ">

            <div>
                <motion.h1
                    initial="hidden"
                    whileInView="reveal"
                    transition={{ staggerChildren: 0.1 }}
                    className="text-8xl font-raleway font-bold leading-[0.8]"
                >{headingChars.map((char, idx) => (
                    <motion.span key={idx} transition={{ duration: 0.5 }} variants={charVariants}>
                        {char}
                    </motion.span>
                ))}</motion.h1>

                <motion.p
                    initial="hidden"
                    whileInView="reveal"
                    transition={{ staggerChildren: 0.015 }}
                    className="text-xl mt-10 font-merriway "
                >
                    {subHeadingChars.map((char, idx) => (
                        <motion.span key={idx} transition={{ duration: .35 }} variants={charVariants}>
                            {char}
                        </motion.span>
                    ))}
                </motion.p>
            </div>

        </div>
    );
};

export default TextBanner;