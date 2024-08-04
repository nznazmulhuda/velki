import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import { AddUser, Dashboard } from "../Admin";
import {
	AccountCreate,
	AgentNewNumber,
	AgentVerify,
	Authentication,
	AutoDeposit,
	Community,
	CustomerService,
	ErrorPage,
	Forum,
	Home,
	MasterAgent,
	PhoneNumSearch,
	ProxyLink,
	SiteAdmin,
	SubAdmin,
	SuperAgent,
} from "../page";
import PrivateRoute from "./PrivateRoute";

export const Routes = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage />,
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/accountCreate",
				element: <AccountCreate />,
			},
			{
				path: "/agentNewNumber",
				element: <AgentNewNumber />,
			},
			{
				path: "/agentVerify",
				element: <AgentVerify />,
			},
			{
				path: "/autoDeposit",
				element: <AutoDeposit />,
			},
			{
				path: "/authentication",
				element: <Authentication />,
			},
			{
				path: "/community",
				element: <Community />,
			},
			{
				path: "/CustomerService",
				element: <CustomerService />,
			},
			{
				path: "/forum",
				element: <Forum />,
			},
			{
				path: "/masterAgent",
				element: <MasterAgent />,
			},
			{
				path: "/phoneNumberSearch",
				element: <PhoneNumSearch />,
			},
			{
				path: "/proxyLink",
				element: <ProxyLink />,
			},
			{
				path: "/siteAdmin",
				element: <SiteAdmin />,
			},
			{
				path: "/subAdmin",
				element: <SubAdmin />,
			},
			{
				path: "/superAgent",
				element: <SuperAgent />,
			},
			{
				path: "/dashboard",
				element: (
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
				),
			},
			{
				path: "/addUser",
				element: (
					<PrivateRoute>
						<AddUser />
					</PrivateRoute>
				),
			},
		],
	},
]);
