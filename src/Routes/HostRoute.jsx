import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loading from "../Pages/Loading/Loading";


const HostRoute = ({ children }) => {
    const { role, isLoading } = useRole();
    const { loading } = useAuth();

    if (loading || isLoading) return <Loading />;
    if (role === 'host') return children;

    return <Navigate to={'/'} />;
};

export default HostRoute;