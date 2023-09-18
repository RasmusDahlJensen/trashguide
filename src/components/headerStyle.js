import styled from "styled-components";

export const HeaderContainer = styled.header`
	color: #fff;
	a {
		text-decoration: none;
		color: black;
		position: relative;
	}
	.active {
		color: ${(props) => props.theme.fontHightlight};
	}
	//Add border height
	.active::before {
		content: "";
		position: absolute;
		top: -25px;
		left: 0;
		right: 0;
		height: 2px;
		background-color: ${(props) => props.theme.fontHightlight};
	}

	/* Media Query for mobile */
	@media (max-width: 1150px) {
		text-align: center;

		.active::before {
			top: 0;
		}
	}

	/* Media Query for desktop */
	@media (min-width: 1150px) {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 50px;
	}
`;

export const Logo = styled.img`
	width: 175px;
`;

export const Nav = styled.nav`
	display: flex;
	gap: 75px;
	/* Mobile Menu Styles */
	@media (max-width: 1150px) {
		display: none;
		margin-top: 25px;
		gap: 20px;
		&.show {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}
	}
`;

export const NavItem = styled.li`
	margin-right: 10px;
	font-size: 18px;

	/* Media Query for mobile */
	@media (max-width: 1150px) {
		margin-right: 0;
		margin-bottom: 10px;
	}
`;

export const MobileMenuButton = styled.button`
	background: none;
	border: none;
	font-size: 24px;
	cursor: pointer;
	display: none; /* Hide by default */

	/* Mobile Menu Styles */
	@media (max-width: 1150px) {
		display: block; /* Show on small screens */
	}
`;
