import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';


import hero1 from '/images/hero-1.webp';
import hero2 from '/images/hero-2.webp';
import hero3 from '/images/image-1.webp';
import hero4 from '/images/image-2.webp';

const Banner = () => {
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

            <div className="absolute text-center top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-2/4 z-20">
                <h1 className="text-6xl font-kaushan sm:text-8xl md:text-[160px] text-white drop-shadow-lg">
                    Siea
                </h1>
                <h1 className="text-xl font-sirin text-white drop-shadow-lg">
                    Inspire, Create, Believe
                </h1>
            </div>
        </div>



    );
};

export default Banner;