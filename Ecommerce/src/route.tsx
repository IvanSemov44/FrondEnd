import { Login } from "@mui/icons-material";
import { createBrowserRouter } from "react-router-dom";
import Hello from "./components/Hello";
import Layout from "./pages/Layout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Hello /> },
                { path: "/login", element: <Login /> }
            ]
        }
    ],
    {
        future: {
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
            v7_skipActionErrorRevalidation: true,

        }
    }
);

export default router;