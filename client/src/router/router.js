import { createBrowserRouter } from "react-router-dom";
import { MainPage, Admin, ErrorPage } from '../pages';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/controll/admin/",
        element: <Admin />,
        errorElement: <ErrorPage />
    }
]);

export default router;
