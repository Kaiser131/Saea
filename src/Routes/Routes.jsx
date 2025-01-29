
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import AllProduct from "../Pages/AllProduct/AllProduct";

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
        ]
    },
]);

export default router;