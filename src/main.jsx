import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./Router/Routes.jsx";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { QueryProvider } from "./QueryProvider/QueryProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.Fragment>
        {/* Query Provider */}
        <QueryProvider>
            {/* Router Provider */}
            <RouterProvider router={Routes} />
            {/* Toaster */}
            <Toaster />
        </QueryProvider>
    </React.Fragment>
);
