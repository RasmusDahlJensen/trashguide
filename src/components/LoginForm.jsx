import React, { useState } from "react";
import { FormButton, FormFlex, FormInput } from "../pages/loginStyle";
import { useAuth } from "../hooks/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const { login } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post("http://localhost:3000/login", {
				username,
				password,
			});

			if (response.status === 200) {
				console.log(response.data);
				const { access_token, user } = response.data;
				login(access_token, user);
				setErrorMessage("");

				if (location.pathname === "/login") {
					navigate("/");
				}
			}
		} catch (error) {
			console.error("Login error:", error);
			setErrorMessage("Forkert email eller kodeord");

			setTimeout(() => {
				setErrorMessage("");
			}, 3000);
		}
	};

	return (
		<FormFlex>
			<div>
				<FormInput
					type="email"
					id="username"
					value={username}
					placeholder="Email"
					required
					onChange={(event) => setUsername(event.target.value)}
					hasError={errorMessage !== ""}
				/>
			</div>
			<div>
				<FormInput
					type="password"
					id="password"
					placeholder="Kodeord"
					value={password}
					required
					onChange={(event) => setPassword(event.target.value)}
					hasError={errorMessage !== ""}
				/>
			</div>
			<FormButton type="button" onClick={handleSubmit}>
				Log ind
			</FormButton>
		</FormFlex>
	);
};
