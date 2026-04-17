import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layouts/HomeLayout";
import Profile from "../Components/Profile";
import Home from "../Components/Home";

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
            element:<h1>this is authentication</h1>
        },
    ]
)

export default router