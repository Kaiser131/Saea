import { useState } from "react";
import DotGrid from "../../Component/Shared/DotGrid";

const Faq = () => {


    const [activeIndex, setActiveIndex] = useState(false);

    // Handle click to toggle the collapse
    const handleClick = (idx) => {
        if (activeIndex === idx) {
            setActiveIndex(null);
        } else {
            setActiveIndex(idx);
        }
    };

    const qusAns = [
        {
            qus: 'What materials are used in your watches?',
            ans: 'We offer a variety of materials, including stainless steel, leather, titanium, and more.',
        },
        {
            qus: 'Can I customize a watch before purchase?',
            ans: 'Customization options depend on the brand and model. Contact us for more details.',
        },
        {
            qus: 'Do your watches come with an authenticity guarantee?',
            ans: 'Rest assured, each watch undergoes a thorough quality check for authenticity.',
        },
        {
            qus: 'Do you ship internationally?',
            ans: 'Yes, we ship worldwide. Delivery times and costs vary based on location.',
        },
        {
            qus: 'What should I do if my watch arrives damaged?',
            ans: 'Please keep the original receipt and packaging intact for a smooth return process.',
        },
        {
            qus: 'What payment methods do you accept?',
            ans: 'We accept credit/debit cards, PayPal, and other secure payment methods.',
        },

    ];

    return (
        <div className="min-h-screen w-full bg-[#191B1D] relative flex items-center ">


            <div className="w-1/2 hidden lg:block lg:border-r-[1px]">
                <div className="w-4/5 mx-auto lg:pl-32 ">
                    <h1 className="text-white block capitalize mb-8 text-lg md:text-2xl font-raleway">Everything <br /> You Need to Know</h1>
                    <DotGrid />
                </div>
            </div>


            <div className=" p-10 lg:w-1/2 space-y-5">
                <h1 className="lg:hidden pl-4 text-white block capitalize mb-8 text-lg md:text-2xl font-raleway">Everything <br /> You Need to Know</h1>
                {
                    qusAns.map((data, idx) => (
                        <div key={idx} onClick={() => handleClick(idx)} className={` lg:w-3/4  text-white collapse collapse-arrow  ${activeIndex === idx ? 'collapse-open' : 'collapse-close'}`}>
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-3xl font-medium font-raleway">{data.qus}</div>

                            <div className="collapse  px-4">
                                <hr />
                                <p className="text-lg font-sirin">{data.ans}</p>
                            </div>
                        </div>
                    ))
                }


            </div>

        </div>
    );
};

export default Faq;