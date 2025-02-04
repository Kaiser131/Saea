
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



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>,
            },
            {
                path: '/products',
                element: <AllProduct></AllProduct>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                index: true,
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'myCart',
                element: <Cart></Cart>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addProduct',
                element: <AddProduct></AddProduct>
            },
        ]
    }

]);

export default router;