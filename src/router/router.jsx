import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layouts/HomeLayout";
import Profile from "../Components/Profile";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import ToyDetails from "../Components/ToyDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import AddToy from "../Pages/AddToy";


const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: HomeLayout,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    index: true,
                    Component: Home,
                    loader: () => fetch('../ToyData.json')
                },
                {
                    path: "/profile",
                    Component: Profile
                },
                {
                    path: "/toyDetails/:id",
                    element: <PrivateRoute>
                        <ToyDetails></ToyDetails>
                    </PrivateRoute>,
                    loader: () => fetch('../ToyData.json')
                },
                {
                    path: "/addToy",
                    element: <PrivateRoute>
                        <AddToy></AddToy>
                    </PrivateRoute>,
                    loader: () => fetch('../ToyData.json')
                }
            ]
        },
        {
            path: "/auth",
            Component: AuthLayout,
            children: [
                {
                    path: '/auth/login',
                    Component: Login
                },
                {
                    path: '/auth/register',
                    Component: Register
                }
            ]
        },
    ]
)

export default router