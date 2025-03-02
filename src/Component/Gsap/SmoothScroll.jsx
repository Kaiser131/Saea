import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        if (ScrollSmoother) {
            let smoother = ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 2, // Adjust smoothness (higher values are smoother)
                effects: true,
            });

            return () => {
                smoother.kill();
            };
        }
    }, []);

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
        </div>
    );
};

export default SmoothScroll;
