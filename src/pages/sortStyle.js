import styled from "styled-components";

export const MainContainer = styled.main``;

export const CardContainer = styled.div`
	margin: 15px 0 15px 0;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;

	h1 {
		color: ${(props) => props.theme.primaryColor};
		font-size: 44px;
		font-weight: 400;
	}
`;
