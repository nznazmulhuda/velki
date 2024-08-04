import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./Router/Routes.jsx";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { QueryProvider } from "./QueryProvider/QueryProvider.jsx";
import axios from "axios";
import AuthProvider from "./Context/AuthProvider.jsx";

axios.defaults.baseURL = "http://localhost:5000";

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.Fragment>
		{/* Query Provider */}
		<QueryProvider>
			{/* context api */}
			<AuthProvider>
				{/* Router Provider */}
				<RouterProvider router={Routes} />
				{/* Toaster */}
				<Toaster />
			</AuthProvider>
		</QueryProvider>
	</React.Fragment>,
);
