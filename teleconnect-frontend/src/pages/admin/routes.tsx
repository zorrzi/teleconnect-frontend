import { redirect, RouteObject } from 'react-router-dom';
import { LoginAdmin } from './login/loginAdmin';

const routes: RouteObject[] = [
    {
        path: "admin/login",
        element: <LoginAdmin />,
        id: "loginadmin",
    },
];

export default routes;
