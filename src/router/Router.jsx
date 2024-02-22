import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Login from "../pages/auth/login/Login";
// import Register from "../pages/auth/register/Register";
import DashboardHome from "../pages/dashboard/home/DashboardHome";
import AddUser from "../pages/dashboard/users/AddUser";
import AllUsers from "../pages/dashboard/users/AllUsers";
import EditUser from "../pages/dashboard/users/EditUser";
import PrivateRoute from "./PrivateRoute";
import AllNumbers from "../pages/dashboard/emails/AllNumbers";
import AllEmails from "../pages/dashboard/emails/AllEmails";

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
            },
            {
                path: '/add-user',
                element: <PrivateRoute><AddUser/></PrivateRoute>
            },
            {
                path: '/edit-user/:id',
                loader: ({params})=>fetch(`https://3xn-server.vercel.app/user/${params.id}`,{method: "POST"}),
                element: <PrivateRoute><EditUser/></PrivateRoute>
            },
            {
                path: '/emails',
                element: <PrivateRoute><AllEmails/></PrivateRoute>
            },
            {
                path: '/numbers',
                element: <PrivateRoute><AllNumbers/></PrivateRoute>
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
