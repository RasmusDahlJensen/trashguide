import React, { useState, useEffect } from "react";
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

	useEffect(() => {
		if (errorMessage) {
			const timeoutId = setTimeout(() => {
				setErrorMessage("");
			}, 3000);

			return () => {
				clearTimeout(timeoutId);
			};
		}
	}, [errorMessage]);

	const isEmailValid = (email) => {
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return emailPattern.test(email);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!username || !password) {
			setErrorMessage("Udfyld venligst både email og kodeord.");
			return;
		}

		if (!isEmailValid(username)) {
			setErrorMessage("Venligst indtast en gyldig email.");
			return;
		}

		try {
			const response = await axios.post("http://localhost:3000/login", {
				username,
				password,
			});

			if (response.status === 200) {
				const { access_token, user } = response.data;
				login(access_token, user);
				setErrorMessage("");

				if (location.pathname === "/login") {
					navigate("/");
				}
			}
		} catch (error) {
			if (error.response) {
				setErrorMessage("Forkert Email eller kodeord");
			} else {
				console.error("Login error:", error);
			}
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
					className={errorMessage ? "has-error" : ""}
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
					className={errorMessage ? "has-error" : ""}
				/>
			</div>
			{errorMessage && <p>{errorMessage}</p>}
			<FormButton type="button" onClick={handleSubmit}>
				Log ind
			</FormButton>
		</FormFlex>
	);
};
