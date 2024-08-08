import PropTypes from "prop-types";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Query = new QueryClient();

export const QueryProvider = ({ children }) => {
	return <QueryClientProvider client={Query}>{children}</QueryClientProvider>;
};

QueryProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
