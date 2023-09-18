import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userData, setUserData] = useState({});
	const accessToken = localStorage.getItem("access_token");
	const userID = localStorage.getItem("user_id");

	useEffect(() => {
		if (accessToken) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, []);

	useEffect(() => {
		if (isLoggedIn && userID) {
			axios
				.get(`LoginEndpoint`)
				.then((response) => {
					setUserData(response.data);
				})
				.catch((error) => {
					console.error("Error fetching user data:", error);
				});
		}
	}, [isLoggedIn, userID]);

	const login = (access_token, user_id) => {
		localStorage.setItem("access_token", access_token);
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
