import styled from "styled-components";

export const CardContainer = styled.div`
	background-color: #f8f8f8;
	border-radius: 15px;
	overflow: hidden;
	transition: height 0.3s ease;
	padding: 15px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	display: flex;
	flex-direction: column;
	height: auto;

	&:hover {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
	}
	h2 {
		user-select: none;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	padding: 10px;
`;

export const ArrowContainer = styled.div`
	display: flex;
	align-self: center;
`;

export const Arrow = styled.img`
	width: 40px;
	height: 40px;
`;
export const Icon = styled.img`
	width: 100px;
	border-radius: 15px;
`;
