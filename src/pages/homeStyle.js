import styled from "styled-components";

export const CallToAction = styled.div`
	position: absolute;
	top: 90%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 999;
	background-color: ${(props) => props.theme.primaryColor};
	width: 500px;
	height: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 15px;
	h2 {
		font-weight: 400;
	}

	@media (max-width: 900px) {
		width: 380px;
	}
`;
export const ButtonContainer = styled.div`
	display: flex;
	gap: 40px;

	a {
		display: inline-block;
		background-color: ${(props) => props.theme.secondaryColor};
		color: white;
		padding: 10px;
		border-radius: 5px;
		text-decoration: none;
		width: 100px;
		text-align: center;
	}
`;

export const MainContainer = styled.main`
	max-width: 1200px;
	margin: auto;
	margin-top: 200px;
	@media (max-width: 800px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 15px;
	}
`;

export const ArticleContainer = styled.article`
	margin-top: 150px;
	display: flex;
	flex-wrap: wrap;
	gap: 50px;
	img {
		width: 500px;
	}
	@media (max-width: 800px) {
		max-width: 500px;
		img {
			display: none;
		}
	}
`;

export const ArticleContent = styled.div`
	margin-top: 100px;
	p {
		width: 475px;
	}
`;

export const ArticleTitle = styled.div`
	width: 300px;
	h2 {
		font-size: 44px;
		font-weight: 400;
		position: relative;
		display: inline; /* Display the text inline */
	}

	h2::before,
	h2::after {
		content: "";
		position: absolute;
		background-color: ${(props) => props.theme.primaryColor};
		height: 15px;
		width: 200px;
		top: 50%;
		transform: translateY(-50%);
	}

	h2::before {
		left: 10px;
		top: 100px;
	}

	h2::after {
		right: -40px;
		top: 35px;
		z-index: -1;
	}
	@media (max-width: 800px) {
		text-align: left;
	}
`;

export const ArticleButtonOne = styled.div`
	background-color: ${(props) => props.theme.secondaryColor};
	width: 150px;
	height: 30px;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	a {
		color: white;
		text-decoration: none;
	}
`;
export const ArticleButtonTwo = styled.div`
	border: 1px solid;
	border-color: ${(props) => props.theme.secondaryColor};
	width: 150px;
	height: 30px;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	a {
		color: ${(props) => props.theme.secondaryColor};
		text-decoration: none;
	}
`;

export const ArticleButtonContainer = styled.div`
	display: flex;
	gap: 10px;
`;

export const BackgroundImage = styled.img`
	width: 100%;
`;
