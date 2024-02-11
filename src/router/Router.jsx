import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Button from "../pages/dashboard/common/Button";
import Widgets from "../pages/dashboard/common/Widgets";
import DashboardHome from "../pages/dashboard/home/DashboardHome";
import Home from "../pages/home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome/>
            },
            {
                path: 'button',
                element: <Button/>
            },
            {
                path: 'widgets',
                element: <Widgets/>
            }
        ]
    },
]);

export default Router;
