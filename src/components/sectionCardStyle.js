import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 250px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	img {
		width: 100%;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
`;

export const CardTitle = styled.div`
	background-color: #${(props) => props.color};
	color: white;
	font-size: 16px;
	font-weight: 600;
	border: none;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	text-align: center;
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CardImage = styled.img`
	width: 100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

export const CardText = styled.p`
	margin: 0;
	padding: 10px;
	font-size: 16px;
	text-align: center;
`;
