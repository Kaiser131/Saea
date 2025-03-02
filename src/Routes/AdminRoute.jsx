import { Navigate } from "react-router-dom";
import Loading from "../Pages/Loading/Loading";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
    const { role, isLoading } = useRole();
    const { loading } = useAuth();

    if (loading || isLoading) return <Loading />;
    if (role === 'host') return children;

    return <Navigate to={'/'} />;
};

export default AdminRoute;