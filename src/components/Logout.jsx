import React from "react";
import { useNavigate } from "react-router-dom";

// Import the custom hook to access the auth functions
import { useAuth } from "../contexts/AuthContext";

export const LogoutButton = () => {
	// Initialize the navigate function from react-router
	const navigate = useNavigate();
	// Initialize the logout function from my custom auth hook
	const { logout } = useAuth();

	const handleLogout = () => {
		// Once called we called the logout function to clear the localstorage and to set out logged in state
		// to false
		logout();
		// and then we navigate to the frontpage
		navigate("/");
	};
	// Renders a logout button when you call the component
	return <button onClick={handleLogout}>Log ud</button>;
};
