import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Accounts from "../Page/Accounts/Accounts";
import Login from "../Page/Login/Login";
import Product from "../Page/Products/Product/Product";
import Products from "../Page/Products/Products/Products";
import SignUp from "../Page/SignUp/SignUp";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/accounts',
                element: <Accounts></Accounts>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/products/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
                element: <Product></Product>
            },

        ]
    }
])

export default routes;