import { redirect, RouteObject } from 'react-router-dom';
import { LoginAdmin } from './login/loginAdmin';
import { Dashboard } from './dashboard/dashboard';
import { Home } from './dashboard/nested/home/homepage';
import { CreatePackage } from './dashboard/nested/home/createpackage';
import { Catalog } from './dashboard/nested/home/catalog';

const routes: RouteObject[] = [
    {
            path: "admin/dashboard/*",
            element: <Dashboard />,
            id: "dashboard",
            children: [
                {
                    index: true,
                    loader: async () => redirect('/admin/dashboard/home')
                },
                {
                    path: "home",
                    element: <Home />,
                    id: "home"
                },
                {
                    path: "new-package",
                    element: <CreatePackage />,
                    id: "new-package"
                },
                {
                    path: "catalog",
                    element: <Catalog />,
                    id: "catalog"
                },
            ]
        },

    {
        path: "admin/login",
        element: <LoginAdmin />,
        id: "loginadmin",
    },
];

export default routes;
