import { useGSAP } from '@gsap/react';
import clipImg from '/images/image-6.webp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AboutUsTextBanner from '../../Component/TextBanner/AboutUsTextBanner';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100%",
            height: "100%",
            borderRadius: 0
        });
    });


    return (
        <div id="about" className="min-h-screen w-full overflow-hidden">
            {/* About Text Banner */}
            <AboutUsTextBanner
                heading="Where Passion Meets Precision"
                subHeading="From classic designs to modern innovations, we celebrate the art of timekeeping..."
                lowerHeading="Our passion for precision is reflected in every watch we create. From the finest materials to meticulous craftsmanship, we are committed to delivering timepieces that stand the test of time. Quality isn’t just a standard for us—it’s a promise."
            />

            {/* Image Container with Scroll Effect */}
            <div id="clip" className="h-screen w-full overflow-hidden relative">
                <div className="mask-clip-path about-image w-full h-full">
                    <img
                        loading="lazy"
                        src={clipImg}
                        alt="Background"
                        className="absolute left-0 top-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>

    );
};

export default AboutUs;