import { Outlet } from "react-router-dom";
import NavBar from "../Component/Shared/NavBar";
import Footer from "../Component/Shared/Footer";
import ScrollTop from "../Component/Shared/ScrollTop/ScrollTop";

const Main = () => {



    return (
        <div className="selection:bg-[#262626] selection:text-white">
            <ScrollTop>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer />
            </ScrollTop>
        </div>
    );
};

export default Main;