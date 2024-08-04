import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
	const { user } = useContext(AuthContext);
	const { pathname } = useLocation();

	if (!user) {
		return <Navigate state={pathname} to={"/authentication"} />;
	}

	return children;
}

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
