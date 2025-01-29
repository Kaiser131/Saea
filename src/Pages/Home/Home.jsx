import AboutUs from "../../Sections/Home/AboutUs";
import Banner from "../../Sections/Home/Banner";
import Faq from "../../Sections/Home/Faq";
import NewArrive from "../../Sections/Home/NewArrive";
import NewsLetter from "../../Sections/Home/NewsLetter";
import TopPics from "../../Sections/Home/TopPics";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <NewArrive></NewArrive>
            <TopPics></TopPics>
            <Faq></Faq>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;