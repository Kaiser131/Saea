import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import HostDashboard from "./HostDashboard";
import GuestDashboard from "./GuestDashboard";
import AdminDashboard from './AdminDashboard';

const DashboardHome = () => {


    return (
        <div>
            {/* <input type="file" name="" onChange={e => {
                setImage(URL.createObjectURL(e.target.files[0]));
            }} id="" /> */}

            {/* <HostDashboard /> */}
            <GuestDashboard />
            {/* <AdminDashboard /> */}

        </div>
    );
};

export default DashboardHome;