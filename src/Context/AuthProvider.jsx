import PropTypes from "prop-types";
import { auth } from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updatePassword,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("Nahid");
    const [isLoading, setIsLoading] = useState(true);

    // login with email and password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // register with email and password
    const register = (email, password) => {
        return createUserWithEmailAndPassword(email, password);
    };

    // password change
    const passwordChange = (newPassword) => {
        return updatePassword(auth.currentUser, newPassword);
    };

    // logout
    const logout = () => {
        return signOut(auth);
    };

    // save the login or logout state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLoading(false);
            } else {
                setUser("");
                setIsLoading(false);
            }
        });

        return () => {
            unSubscribe();
        };
    });

    // all passed data in here
    const authInfo = {
        user,
        isLoading,
        login,
        register,
        logout,
        passwordChange,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
