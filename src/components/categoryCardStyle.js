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
	justify-content: space-between;
	gap: 30px;
	padding: 10px;
`;

export const CardFlex = styled.div`
	display: flex;
	align-items: center;
	gap: 50px;
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

export const CatImg = styled.img`
	height: 100%;
	border-radius: 15px;
`;

export const CategoryContainer = styled.div`
	padding: 50px;
`;

export const CatTitleContainer = styled.div`
	border-bottom: 1px solid black;
	text-align: center;
	margin-bottom: 25px;
`;

export const AllowedContainer = styled.div`
	border: 1px solid;
	border-color: ${(props) => props.theme.tertiaryColor};
	width: 300px;
	text-align: center;
	border-radius: 15px;
`;

export const CategoryCardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
`;

export const NotAllowedContainer = styled.div`
	border: 1px solid red;
	width: 300px;
	text-align: center;
	border-radius: 15px;
`;
