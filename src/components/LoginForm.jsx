import React, { useState, useEffect } from "react";
import { FormButton, FormFlex, FormInput } from "../pages/loginStyle";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const { login } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	//Reset the form error after 3 seconds
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

	//Email test to see if the email is valid
	const isEmailValid = (email) => {
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return emailPattern.test(email);
	};
	//When you submit the form you fire this function
	const handleSubmit = async (event) => {
		event.preventDefault();

		//If there's not a username or a password, or if its just missing one of them
		//We set the error to this:
		if (!username || !password) {
			setErrorMessage("Udfyld venligst både email og kodeord.");
			return;
		}
		//If the email fails the REGEX test we set the error to this:
		if (!isEmailValid(username)) {
			setErrorMessage("Venligst indtast en gyldig email.");
			return;
		}
		//Otherwise if it passes the vlaidation it'll be posted to the API
		try {
			const response = await axios.post("http://localhost:3000/login", {
				username,
				password,
			});
			//If the status comes back as ok we take the user DATA and destructure it
			//And send it to our authContext
			if (response.status === 200) {
				const { access_token, user } = response.data;
				login(access_token, user);
				setErrorMessage("");
				//If we're still on the login page we get redirected to the frontpage
				if (location.pathname === "/login") {
					navigate("/");
				}
			}
			//If the response comes back negative we show the user an error
			//And put a more detailed error message in the console
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
