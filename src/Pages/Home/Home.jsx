import AboutUs from "../../Sections/Home/AboutUs";
import Banner from "../../Sections/Home/Banner";
import Faq from "../../Sections/Home/Faq";
import TopPics from "../../Sections/Home/TopPics";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <TopPics></TopPics>
            <Faq></Faq>
        </div>
    );
};

export default Home;