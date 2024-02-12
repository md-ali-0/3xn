import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Login from "../pages/auth/login/Login";
// import Register from "../pages/auth/register/Register";
import DashboardHome from "../pages/dashboard/home/DashboardHome";
import AllUsers from "../pages/dashboard/users/AllUsers";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "/",
                element: <PrivateRoute><DashboardHome /></PrivateRoute>,
            },
            {
                path: '/users',
                element: <PrivateRoute><AllUsers/></PrivateRoute>
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    // {
    //     path: "/register",
    //     element: <Register />,
    // },
]);

export default Router;
