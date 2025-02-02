import { Outlet } from 'react-router-dom';
import Sidebar from '../../Component/DashBoard/Sidebar';

const DashBoard = () => {
    return (
        <div className='flex'>
            {/* left sidebar */}
            <div className=''>
                <Sidebar></Sidebar>
            </div>
            {/* outlets */}
            <div className=''>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;