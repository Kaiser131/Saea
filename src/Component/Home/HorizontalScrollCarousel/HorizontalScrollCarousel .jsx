import { useQuery } from "@tanstack/react-query";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HorizonCard from "./HorizonCard";
import axiosPublic from "../../../hooks/AxiosPublic";


const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-50%"]);

    const { data: watch = [] } = useQuery({
        queryKey: ['newArrival'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/watch');
            return data;
        }
    });



    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#BEBEBE]">

            <div className="absolute z-10  max-w-[500px] text-center left-1/2  transform -translate-x-1/2 translate-y-[40px] ">
                <h1 className="text-4xl font-lexend pb-4">Discover <br /> what’s new.</h1>
                <p className="font-sirin text-white text-shadow font-medium">Our latest watches are here! Crafted to elevate your style, these new arrivals bring sophistication and cutting-edge designs to your wrist.</p>
            </div>

            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {watch.slice(10, 17).map(data => <HorizonCard key={data._id} newArriveData={data} ></HorizonCard>)}


                </motion.div>
            </div>

        </section>
    );
};


export default HorizontalScrollCarousel;

