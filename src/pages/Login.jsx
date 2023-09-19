import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../hooks/AuthContext";
import {
	FormButton,
	FormContainer,
	FormInput,
	InputContainer,
	MainContainer,
} from "./loginStyle";
import logo from "../assets/Logo.png";

export const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const { login } = useAuth();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post("http://localhost:3000/login", {
				username,
				password,
			});

			if (response.status === 200) {
				console.log(response.data);
				// const { access_token, user_id } = response.data;
				// login(access_token, user_id);

				setErrorMessage("");
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
		<MainContainer>
			<div>
				<img src={logo} alt="Logo" />

				<p>Log ind på affaldsguiden for at anmelde stationer</p>
			</div>
			<FormContainer>
				<h1>Log ind</h1>
				<InputContainer>
					<FormInput
						type="email"
						id="username"
						value={username}
						placeholder="Email"
						required
						onChange={(event) => setUsername(event.target.value)}
						hasError={errorMessage !== ""}
					/>
				</InputContainer>
				<InputContainer>
					<FormInput
						type="password"
						id="password"
						placeholder="Kodeord"
						value={password}
						required
						onChange={(event) => setPassword(event.target.value)}
						hasError={errorMessage !== ""}
					/>
				</InputContainer>
				<FormButton type="button" onClick={handleSubmit}>
					Log ind
				</FormButton>
			</FormContainer>
		</MainContainer>
	);
};
