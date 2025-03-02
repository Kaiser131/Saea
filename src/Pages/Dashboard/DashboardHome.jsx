import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import HostDashboard from "./HostDashboard";
import GuestDashboard from "./GuestDashboard";
import AdminDashboard from './AdminDashboard';
import useAuth from '../../hooks/useAuth';
import Loading from '../Loading/Loading';
import useRole from '../../hooks/useRole';

const DashboardHome = () => {

    const { loading } = useAuth();


    const { role, isLoading } = useRole();


    if (loading || isLoading) return <Loading />;

    return (
        <div>
            {/* <input type="file" name="" onChange={e => {
                setImage(URL.createObjectURL(e.target.files[0]));
            }} id="" /> */}

            {role === 'host' && <HostDashboard />}
            {role === 'guest' && <GuestDashboard />}
            {role === 'admin' && <AdminDashboard />}



        </div>
    );
};

export default DashboardHome;