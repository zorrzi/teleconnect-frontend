import { redirect, RouteObject } from 'react-router-dom';
import { Dashboard } from './dashboard/dashboard';
import { Home } from './dashboard/nested/home/homepage';
import { LandingPage } from './landingpage/landingpage';
import { Login } from './login/login';
import { Signup } from './signup/signup';

const routes: RouteObject[] = [
    {
        path: "user/dashboard",
        element: <Dashboard />,
        id: "dashboard",
        children: [
            {
                index: true,
                loader: async () => redirect('/user/dashboard/home')
            },
            {
                path: "home",
                element: <Home />,
                id: "home"
            },
        ]
    },
    {
        path: "user/landingpage",
        element: <LandingPage />,
        id: "landingpage",
    },
    {
        path: "user/login",
        element: <Login />,
        id: "login",

    },
    {
        path: "user/signup",
        element: <Signup />,
        id: "signup",

    }
];

export default routes;
