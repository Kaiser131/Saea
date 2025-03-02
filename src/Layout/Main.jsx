import { Outlet } from "react-router-dom";
import NavBar from "../Component/Shared/NavBar";

const Main = () => {



    return (
        <div className="selection:bg-[#262626] selection:text-white">
            <NavBar></NavBar>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;