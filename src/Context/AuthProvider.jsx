import PropTypes from "prop-types";
import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null,
	);

	// login with email and password
	const login = (emailOrUsername, password) => {
		axios
			.get(
				`/login?emailOrUsername=${emailOrUsername}&password=${password}`,
			)
			.then((res) => {
				toast.success("Login Success!");
				setUser(res.data);
				localStorage.setItem("user", JSON.stringify(res.data));
			})
			.catch((e) => toast.error(e.response.data));
	};

	// all passed data in here
	const authInfo = {
		login,
		user,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthProvider;
