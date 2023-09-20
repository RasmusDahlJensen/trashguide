import styled from "styled-components";

export const DetailContainer = styled.main`
	margin-top: 100px;
	margin-bottom: 15px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
	background-color: white;
	border-radius: 15px;
	overflow: hidden;
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 200px;
	background-color: #${(props) => props.color};
	h1 {
		margin-left: 35px;
		color: white;
	}
	img {
		height: 100%;
	}
`;

export const CardContainer = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	gap: 50px;
	padding: 50px;
`;
