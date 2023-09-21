import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const LogoutButton = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	return <button onClick={handleLogout}>Log ud</button>;
};
