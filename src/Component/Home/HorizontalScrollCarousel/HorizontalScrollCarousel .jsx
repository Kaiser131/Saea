import { useQuery } from "@tanstack/react-query";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HorizonCard from "./HorizonCard";
import TextBanner from "../../TextBanner/TextBanner";
import useAxiosCommon from "../../../hooks/useAxiosCommon";


const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const axiosCommon = useAxiosCommon();

    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-50%"]);

    const { data: watch = [] } = useQuery({
        queryKey: ['newArrival'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/watch');
            return data;
        }
    });



    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#BEBEBE]">


            <div className="absolute left-1/2 md:max-w-[500px] transform -translate-x-1/2 top-10">
                <TextBanner heading="New Arrival..." subHeading="Our latest watches are here! Crafted to elevate your style, these new arrivals bring sophistication and cutting-edge designs to your wrist." />
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

