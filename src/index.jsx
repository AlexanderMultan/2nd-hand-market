import {createRoot} from "react-dom/client";
import App  from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Newuser} from "./pages/newUser/Newuser";
import {Backoffice} from "./pages/backOffice/Backoffice";
import './styles/index.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error('Root element not found');
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/new-user",
        element: <Newuser />,
    },
    {
        path: "/back-office",
        element: <Backoffice />,
    },
]);

const root = createRoot(rootElement);
root.render(<RouterProvider router={router} />);