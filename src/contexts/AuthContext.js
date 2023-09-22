import React, { createContext, useContext, useEffect, useState } from "react";

//Create an authentication context to manage user data
const AuthContext = createContext();

export function AuthProvider({ children }) {
	//Here we track if the user is logged in or not
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	//Store user data
	const [userData, setUserData] = useState({});
	///Grab the access token from localstorage
	const accessToken = localStorage.getItem("access_token");

	useEffect(() => {
		//If we have an access token we're assumed logged in
		accessToken ? setIsLoggedIn(true) : setIsLoggedIn(false);
	}, [accessToken]);

	//Login function
	const login = (access_token, user) => {
		//When called we set localstorage with access token and user id
		localStorage.setItem("access_token", access_token);
		localStorage.setItem("user_id", user.id);
		//We grab user data and put it in our state
		setUserData(user);
		// we set logged in to true
		setIsLoggedIn(true);
	};

	//Logout function
	const logout = () => {
		//When called with a logout button we'll remove accesstoken and userid from storage
		localStorage.removeItem("access_token");
		localStorage.removeItem("user_id");
		//And set logged in state to being false
		setIsLoggedIn(false);
	};

	return (
		// Provide the context with the above values to its children
		<AuthContext.Provider value={{ isLoggedIn, userData, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
// Custom hook to access the values
export function useAuth() {
	return useContext(AuthContext);
}
