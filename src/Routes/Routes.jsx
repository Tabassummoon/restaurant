import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Contact from "../pages/contact/contact";
import OurMenu from "../pages/ourMenu/ourMenu";
import OurShop from "../pages/ourShop/ourShop";
import SignUP from "../pages/signup/SignUp";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/dashboard/cart/Cart";
import UserProfine from "../pages/dashboard/userProfile/UserProfine";
    
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUP></SignUP>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "ourMenu",
                element: <OurMenu></OurMenu>
            },
            {
                path: "ourShop",
                element: <OurShop></OurShop>
            },
        ]
    },
        {
        path:"/dashboard",
        element: <DashBoard></DashBoard>,
        children:[
            {
                path:"cart",
                element:<Cart></Cart>
            },
            {
                path:"userprofile",
                element:<UserProfine></UserProfine>
            },
        ]
    }
]);
export default router;