import React, { useState } from "react";
import { FormContainer, FormImage, MainContainer } from "./loginStyle";
import logo from "../assets/Logo.png";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
	return (
		<MainContainer>
			<FormImage>
				<img src={logo} alt="Logo" />

				<p>Log ind på affaldsguiden for at anmelde stationer</p>
			</FormImage>
			<FormContainer>
				<h1>Log ind</h1>
				<LoginForm />
			</FormContainer>
		</MainContainer>
	);
};
