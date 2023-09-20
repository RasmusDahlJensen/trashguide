import styled from "styled-components";

export const MainContainer = styled.main`
	margin-top: 100px;
`;

export const StepsContainer = styled.div`
	background-color: #114d46;
	width: 50%;
	@media (max-width: 900px) {
		display: none;
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	width: 1000px;
	margin: auto;
	border-radius: 15px;
	overflow: hidden;
	width: 100%;
`;

export const ContentContainer = styled.div`
	background-color: #dcdcdc;
	padding: 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	h2 {
		font-weight: 400;
		font-size: 30px;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 50px;
	width: 500px;
	user-select: none;
	.active {
		border: 2px solid;
		border-color: ${(props) => props.theme.tertiaryColor};
		box-sizing: border-box;
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 200px;
	height: 200px;
	cursor: pointer;
	border-radius: 5px;
	background-color: white;

	img {
		width: 50px;
	}
`;
