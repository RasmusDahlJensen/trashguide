import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const accessToken = localStorage.getItem("access_token");

	useEffect(() => {
		accessToken ? setIsLoggedIn(true) : setIsLoggedIn(false);
	}, [accessToken]);

	const login = (access_token, user) => {
		localStorage.setItem("access_token", access_token);
		localStorage.setItem("user_id", user.id);
		setIsLoggedIn(true);
	};

	const logout = () => {
		localStorage.removeItem("access_token");
		localStorage.removeItem("user_id");

		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
