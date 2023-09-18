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

export const Header = () => {
	// State to track whether the mobile menu is open or closed
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Function to toggle the mobile menu
	const toggleMobileMenu = () => {
		console.log("Mobile menu button clicked");
		setIsMobileMenuOpen(!isMobileMenuOpen);
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
			<Nav className={isMobileMenuOpen ? "show" : ""}>
				<NavItem>
					<NavLink
						exact
						to="/"
						activeClassName="active-link" // Add this line
					>
						Forside
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						to="/sorting"
						activeClassName="active-link" // Add this line
					>
						Sortering
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						to="/recycling"
						activeClassName="active-link" // Add this line
					>
						Genbrugsstationer
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						to="/purchase"
						activeClassName="active-link" // Add this line
					>
						Bestil holder
					</NavLink>
				</NavItem>
			</Nav>
			<NavLink to="/login">LOGIN</NavLink>
		</HeaderContainer>
	);
};
