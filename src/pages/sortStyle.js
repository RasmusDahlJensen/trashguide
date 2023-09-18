import styled from "styled-components";

import lookingGlassIcon from "../assets/Layout/icon-search.svg";
import bgImage from "../assets/Layout/bg-waves-1.svg";

export const MainContainer = styled.main``;

export const CardContainer = styled.div`
	margin: 15px 0 15px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 25px;
	margin-top: 100px;
`;

export const SearchBar = styled.input`
	margin-top: 30px;
	padding: 15px;
	border-radius: 15px;
	border: none;
	background-color: white;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.34);
	width: 350px;
	background-image: url(${lookingGlassIcon});
	background-size: 20px;
	background-position: 95%;
	background-repeat: no-repeat;
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
	h2,
	h3 {
		margin: 0;
		font-size: 24px;
		font-weight: 400;
	}
	h2 {
		color: ${(props) => props.theme.fontHightlight};
	}
	h3 {
		color: ${(props) => props.theme.secondaryColor};
	}
`;

export const BackgroundImage = styled.img`
	height: 300px;
`;
