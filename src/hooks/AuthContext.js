import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userData, setUserData] = useState({});
	const accessToken = localStorage.getItem("access_token");

	useEffect(() => {
		if (accessToken) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, []);

	const login = (access_token, user) => {
		localStorage.setItem("access_token", access_token);
		setUserData(user);
		console.log(user);
		setIsLoggedIn(true);
	};

	const logout = () => {
		localStorage.removeItem("access_token");
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
