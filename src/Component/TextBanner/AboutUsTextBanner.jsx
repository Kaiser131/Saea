import { motion } from "framer-motion";
import splitStringUsingRegex from "../../Utils/splitString";
const AboutUsTextBanner = ({ heading, subHeading, lowerHeading }) => {


    const headingChars = splitStringUsingRegex(heading);
    const subHeadingChars = splitStringUsingRegex(subHeading);
    const lowerHeadingChars = splitStringUsingRegex(lowerHeading);

    const charVariants = {
        hidden: { opacity: 0 },
        reveal: { opacity: 1 }
    };

    return (
        < div className="relative mb-24 pt-10 flex flex-col items-center gap-5">

            <motion.h2
                initial="hidden"
                whileInView="reveal"
                transition={{ staggerChildren: 0.1 }}
                className="font-lexend mt-5 text-4xl  uppercase text-center">

                {headingChars.map((char, idx) => (
                    <motion.span key={idx} transition={{ duration: 0.5 }} variants={charVariants}>
                        {char}
                    </motion.span>
                ))}

            </motion.h2>

            <motion.div
                initial="hidden"
                whileInView="reveal"
                transition={{ staggerChildren: 0.025 }}
                className="absolute font-sirin top-full mt-5 left-1/2 w-full max-w-96 -translate-x-1/2 text-center text-lg md:max-w-[34rem] ">


                {subHeadingChars.map((char, idx) => (
                    <motion.span key={idx} transition={{ duration: .35 }} variants={charVariants}>
                        {char}
                    </motion.span>
                ))}


            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="reveal"
                transition={{ staggerChildren: 0.015 }}
                className="about-subtext font-sirin">

                {lowerHeadingChars.map((char, idx) => (
                    <motion.span key={idx} transition={{ duration: .35 }} variants={charVariants}>
                        {char}
                    </motion.span>
                ))}

            </motion.div>

        </div>
    );
};

export default AboutUsTextBanner;