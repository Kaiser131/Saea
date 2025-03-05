
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import AllProduct from "../Pages/AllProduct/AllProduct";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import DashBoard from "../Layout/DashBoard/DashBoard";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Cart from "../Pages/Dashboard/Cart";
import Profile from "../Pages/Dashboard/Profile";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddProduct from "../Pages/Dashboard/AddProduct";
import PrivateRoute from "./PrivateRoute";
import AnimateRoutes from "../Pages/Animate/AnimateRoutes";
import AllProducts from "../Pages/Dashboard/AllProducts";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/product/:id',
                element:
                    <AnimateRoutes>
                        <ProductDetails />
                    </AnimateRoutes>
            },
            {
                path: '/products',
                element:
                    <AnimateRoutes>
                        <AllProduct />
                    </AnimateRoutes>
            },
            {
                path: '/login',
                element:
                    <AnimateRoutes>
                        <Login />
                    </AnimateRoutes>
            },
            {
                path: '/signup',
                element:
                    <AnimateRoutes>
                        <SignUp />
                    </AnimateRoutes>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                index: true,
                element: <PrivateRoute>
                    <AnimateRoutes>
                        <DashboardHome />
                    </AnimateRoutes>
                </PrivateRoute>
            },
            {
                path: 'myCart',
                element: <PrivateRoute>
                    <AnimateRoutes>
                        <Cart />
                    </AnimateRoutes>
                </PrivateRoute>
            },
            {
                path: 'profile',
                element: <PrivateRoute>
                    <AnimateRoutes>
                        <Profile />
                    </AnimateRoutes>
                </PrivateRoute>
            },
            {
                path: 'allUsers',
                element: <PrivateRoute>
                    <AnimateRoutes>
                        <AllUsers />
                    </AnimateRoutes>
                </PrivateRoute>
            },
            {
                path: 'addProduct',
                element:
                    <PrivateRoute>
                        <AnimateRoutes>
                            <AddProduct />
                        </AnimateRoutes>
                    </PrivateRoute>
            },
            {
                path: 'allProduct',
                element:
                    <PrivateRoute>
                        <AnimateRoutes>
                            <AllProducts />
                        </AnimateRoutes>
                    </PrivateRoute>
            },
        ]
    }

]);

export default router;