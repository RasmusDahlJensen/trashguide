import styled from "styled-components";

export const CardContainer = styled.div`
	background-color: #f8f8f8;
	border-radius: 15px;
	height: 150px;
	padding: 15px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	overflow: hidden;
	height: 100%;
	img {
		width: 100px;
		border-radius: 15px;
	}
`;
