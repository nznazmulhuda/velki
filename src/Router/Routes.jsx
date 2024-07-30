import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import {
    AccountCreate,
    AgentNewNumber,
    AgentVerify,
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
        ],
    },
]);
