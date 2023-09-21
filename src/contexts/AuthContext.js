import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userData, setUserData] = useState({});
	const accessToken = localStorage.getItem("access_token");

	useEffect(() => {
		accessToken ? setIsLoggedIn(true) : setIsLoggedIn(false);
	}, []);

	const login = (access_token, user) => {
		localStorage.setItem("access_token", access_token);
		localStorage.setItem("user_id", user.id);
		setUserData(user);
		setIsLoggedIn(true);
	};

	const logout = () => {
		localStorage.removeItem("access_token");
		localStorage.removeItem("user_id");

		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, userData, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
