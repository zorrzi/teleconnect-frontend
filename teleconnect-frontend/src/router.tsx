import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import userRoutes from './pages/user/routes';
import adminRoutes from './pages/admin/routes';
import { LandingPage } from "./pages/user/landingpage/landingpage";

export const router = createBrowserRouter([
    ...userRoutes,
    ...adminRoutes,
    
    {
        path: "/",
        element: <LandingPage/>,
    }
]);

