import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import { AddUser, Dashboard, FindUser, UpdateUser } from "../Admin";
import {
	AccountCreate,
	AgentNewNumber,
	Authentication,
	AutoDeposit,
	Community,
	CustomerService,
	ErrorPage,
	Forum,
	Home,
	Homepage,
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
				element: <Homepage />,
			},
			{
				path: "/home",
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
				element: <FindUser />,
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
			{
				path: "/findUser",
				element: (
					<PrivateRoute>
						<FindUser />
					</PrivateRoute>
				),
			},
			{
				path: "/update/:id",
				element: (
					<PrivateRoute>
						<UpdateUser />
					</PrivateRoute>
				),
			},
		],
	},
]);
