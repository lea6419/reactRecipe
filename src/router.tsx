import { createBrowserRouter } from "react-router";
import Home from "./components/routers/component/Home";
import About from "./components/routers/component/About";
import AppLayout from "./components/routers/component/AppLayout";
import Register from "./components/bb/registeri";

export const router = createBrowserRouter([
    {
        path: '/', element: <AppLayout />,
        errorElement: <h1>Error: Route not found</h1>,
        children: [
            { path: '/', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'register', element: <Register /> }
        ]
    }
]);
