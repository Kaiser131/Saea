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
                // TODO:  #clip hobe
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        });

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        });

    });

    return (
        <div id="about" className=" min-h-screen w-screen  ">


            {/* this is the text of this section */}
            <AboutUsTextBanner heading='Where Passion Meets Precision' subHeading=' From classic designs to modern innovations, we celebrate the art of timekeeping...' lowerHeading=' Our passion for precision is reflected in every watch we create. From the finest materials to meticulous craftsmanship, we are committed to delivering timepieces that stand the test of time. Quality isn’t just a standard for us—it’s a promise.' ></AboutUsTextBanner>


            {/* this is the image  container which we will implement scroll effect */}
            <div id="clip" className="h-dvh w-screen">
                <div className="mask-clip-path about-image">

                    <img src={clipImg} alt="Background" className='absolute left-0 top-0 size-full object-cover' />

                </div>
            </div>


        </div>
    );
};

export default AboutUs;