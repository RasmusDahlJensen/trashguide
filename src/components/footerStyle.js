import styled from "styled-components";

export const FooterContainer = styled.footer`
	background-color: ${(props) => props.theme.secondaryColor};
	height: 200px;
	display: flex;
	justify-content: space-between;
	padding: 20px 50px 0 50px;
	img {
		max-width: 200px;
	}
	p {
		color: white;
		width: 400px;
	}
`;

export const FooterContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: end;
	width: 150px;
	p {
		margin: 0 0 10px 0;
	}
`;
