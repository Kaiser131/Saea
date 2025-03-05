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
        <div className="  max-w-[1000px] px-10 mx-auto text-center ">

            <div>
                <motion.h1
                    initial="hidden"
                    whileInView="reveal"
                    transition={{ staggerChildren: 0.1 }}
                    className="text-3xl md:text-4xl text-black font-lexend pb-4"
                >{headingChars.map((char, idx) => (
                    <motion.span key={idx} transition={{ duration: 0.5 }} variants={charVariants}>
                        {char}
                    </motion.span>
                ))}</motion.h1>

                <motion.p
                    initial="hidden"
                    whileInView="reveal"
                    transition={{ staggerChildren: 0.015 }}
                    className="font-sirin text-white  text-sm md:text-base text-shadow font-medium "
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