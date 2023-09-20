import React from "react";
import { FooterContainer, FooterContent } from "./footerStyle";
import logo from "../../assets/FooterLogo.png";
import arrow from "../../assets/Layout/icon-arrow-up.svg";

export const Footer = () => {
	return (
		<FooterContainer>
			<div>
				<div>
					<img src={logo} alt="logo" />
				</div>
				<p>
					Vi arbejder for at informere om korrekt affaldssortering. Ved at
					sortere hjælper du os, men også klimaet.
				</p>
				<p>©2023 Affaldsguiden.</p>
			</div>
			<FooterContent>
				<p>Back to top</p>
				<a href="#top">
					<img src={arrow} alt="arrow up" />
				</a>
			</FooterContent>
		</FooterContainer>
	);
};
