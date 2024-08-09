import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import { AddUser, Dashboard, FindUser, UpdateUser } from "../Admin";
import {
	AccountCreate,
	AgentKoto,
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
import { Agent, Facebook, Lenden, Master, Ovijog, Sorto } from "../page/Faq";
// import Register from "../Test/Register";

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
			// {
			// 	path: "/register",
			// 	element: <Register />,
			// },
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
				path: "/allAgentType",
				element: <AgentKoto />,
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
				path: "/lenden",
				element: <Lenden />,
			},
			{
				path: "/law",
				element: <Sorto />,
			},
			{
				path: "/facebookGroup",
				element: <Facebook />,
			},
			{
				path: "/howToBeAgent",
				element: <Agent />,
			},
			{
				path: "/howToBeMasterAgent",
				element: <Master />,
			},
			{
				path: "/ovijog",
				element: <Ovijog />,
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
