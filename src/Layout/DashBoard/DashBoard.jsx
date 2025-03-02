import { Outlet } from 'react-router-dom';
import Sidebar from '../../Component/DashBoard/Sidebar';
import { useState } from 'react';

const DashBoard = () => {
    const [open, setOpen] = useState(false);



    return (
        <div className='flex selection:bg-[#262626] selection:text-white'>
            {/* left sidebar */}
            <div className=''>
                <Sidebar open={open} setOpen={setOpen}  ></Sidebar>
            </div>
            {/* outlets */}
            <div className={`${open ? 'w-[calc(100vw-208px)]' : 'w-[calc(100vw-40px)]'}`}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;