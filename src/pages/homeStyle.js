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
	margin-top: 150px;
`;

export const ArticleContainer = styled.article`
	margin-top: 150px;
`;

export const ArticleContent = styled.div`
	p {
		width: 475px;
	}
`;

export const ArticleTitle = styled.div`
	width: 250px;
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
`;
