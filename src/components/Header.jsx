import React, { useState } from "react";
import {
	HeaderContainer,
	Logo,
	MobileMenuButton,
	Nav,
	NavItem,
} from "./headerStyle";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import { LogoutButton } from "./Logout";
import { useAuth } from "../hooks/AuthContext";

export const Header = () => {
	const { isLoggedIn } = useAuth();
	// State to track whether the mobile menu is open or closed
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Function to toggle the mobile menu
	const toggleMobileMenu = () => {
		console.log("Mobile menu button clicked");
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const renderAuthButton = () => {
		if (isLoggedIn) {
			return <LogoutButton />;
		} else {
			return <NavLink to="/login">LOGIN</NavLink>;
		}
	};

	return (
		<HeaderContainer id="top">
			{/* Logo */}
			<NavItem>
				<a href="/">
					<Logo src={logo} alt="Logo" />
				</a>
			</NavItem>
			{/* Mobile Menu Button */}
			<MobileMenuButton onClick={toggleMobileMenu}>
				{/* Burger icon */}
				<span>&#9776;</span>
			</MobileMenuButton>
			{/* Navigation Menu */}
			{/* Determines whether or not the burger menu should be displayed or not in the CSS */}
			<Nav className={isMobileMenuOpen ? "show" : ""}>
				<NavItem>
					<NavLink exact to="/">
						Forside
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/sorting">Sortering</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/recycling">Genbrugsstationer</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/purchase">Bestil holder</NavLink>
				</NavItem>
			</Nav>
			{/* Render the login/logout button */}
			{renderAuthButton()}
		</HeaderContainer>
	);
};
