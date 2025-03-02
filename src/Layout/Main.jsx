import { Outlet } from "react-router-dom";
import NavBar from "../Component/Shared/NavBar";
import Footer from "../Component/Shared/Footer";

const Main = () => {



    return (
        <div className="selection:bg-[#262626] selection:text-white">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;