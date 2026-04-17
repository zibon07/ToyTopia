import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layouts/HomeLayout";
import Profile from "../Components/Profile";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter(
    [
        {
            path:"/",
            Component:HomeLayout,
            children:[
                {
                    index:true,
                    Component:Home
                },
                {
                    path:"/profile",
                    Component:Profile
                }
            ]
        },
        {
            path:"/auth",
            Component:AuthLayout,
            children:[
                {
                    path:'/auth/login',
                    Component:Login
                },
                {
                    path:'/auth/register',
                    Component:Register
                }
            ]
        },
    ]
)

export default router