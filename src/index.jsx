import {createRoot} from "react-dom/client";
import App  from "./App";
import { createHashRouter, RouterProvider } from "react-router-dom"; // Изменили на createHashRouter
import {Newuser} from "./pages/newUser/Newuser";
import {Backoffice} from "./pages/backOffice/Backoffice";
import { Provider } from 'react-redux';
import { store } from './store/store';
import './styles/index.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error('Root element not found');
}

const router = createHashRouter([
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
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);