import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./Router/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import { QueryProvider } from "./QueryProvider/QueryProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* Query Provider */}
        <QueryProvider>
            {/* Router Provider */}
            <RouterProvider router={Routes} />
        </QueryProvider>
    </React.StrictMode>
);
