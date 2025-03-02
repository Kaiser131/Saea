import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';


import hero1 from '/images/hero-1.webp';
import hero2 from '/images/hero-2.webp';
import hero3 from '/images/image-1.webp';
import hero4 from '/images/image-2.webp';

import { delay, motion } from 'framer-motion';



const Banner = () => {

    const bannerText = 'S i e a';

    return (
        <div className="w-full h-screen relative">
            <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none z-10"></div>

            <div className="h-full w-full relative">
                <AwesomeSlider className="relative h-full w-full z-0" animation="scaleOutAnimation">
                    <div className="h-full w-full relative">
                        <img className="object-cover h-full w-full" src={hero1} alt="" />
                    </div>
                    <div className="h-full w-full relative">
                        <img className="object-cover h-full w-full" src={hero2} alt="" />
                    </div>
                    <div className="h-full w-full relative">
                        <img className="object-cover h-full w-full" src={hero3} alt="" />
                    </div>
                    <div className="h-full w-full relative">
                        <img className="object-cover h-full w-full" src={hero4} alt="" />
                    </div>
                </AwesomeSlider>
            </div>

            <motion.div
                animate={{
                    transition: {
                        delayChildren: 0.4,
                        staggerChildren: 0.1,
                    },
                }}
                className="absolute text-center top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-2/4 z-20 px-3 overflow-hidden"
            >
                <div className="mt-4">
                    {bannerText.split(" ").map((text, idx) => (
                        <motion.p
                            key={idx}
                            initial={{ y: 320, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.5 + idx * 0.1, duration: 1.,
                                staggerChildren: {
                                    delay: 0.3
                                }
                            }}
                            className="text-6xl inline-flex relative whitespace-nowrap font-kaushan sm:text-8xl md:text-[160px] text-white drop-shadow-lg z-[-1]"
                        >
                            {text}
                        </motion.p>
                    ))}
                </div>


                {/* Subtitle */}
                <motion.h1
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1,
                        transition: {
                            ease: 'easeInOut',
                            duration: 1.5,
                            delay: 2
                        }
                    }}

                    className="text-xl font-sirin text-white drop-shadow-lg z-20">
                    Inspire, Create, Believe
                </motion.h1>

                {/* Mapped Text Below with Stagger Effect */}

            </motion.div>


        </div>



    );
};

export default Banner;