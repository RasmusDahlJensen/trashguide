import styled from "styled-components";

export const MainContainer = styled.main`
	margin-top: 100px;
	background-color: white;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	border-radius: 15px;
`;

export const RecycleDetails = styled.div`
	padding: 25px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	img {
		width: 25px;
	}
`;

export const ReviewContainer = styled.div`
	padding: 25px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 15px;
`;

export const ReviewCard = styled.div`
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	padding: 10px;
	width: 300px;
	height: 100%;
	img {
		width: 25px;
	}
	p {
		margin-top: 1px;
	}
`;

export const TextBoxContainer = styled.div`
	background-color: ${(props) => props.theme.fontHightlight};
	padding: 30px 20px 40px 20px;
	text-align: center;
	p {
		color: white;
		font-size: 24px;
		margin: 0 0 15px 0;
	}
`;

export const TextArea = styled.div`
	margin: 15px 0 15px 0;
	display: flex;
	justify-content: center;
`;
