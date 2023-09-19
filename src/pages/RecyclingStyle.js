import styled from "styled-components";

export const MainContainer = styled.div`
	margin: auto;

	margin-top: 100px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 50px;
	max-width: 1400px;
`;

export const CardContainer = styled.div`
	width: 400px;
	height: 400px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
	border-radius: 15px;
	overflow: hidden;
	cursor: pointer;
	figure {
		margin: 0;
		padding: 0;
	}
	img {
		width: 25px;
	}
`;

export const RatingContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	p {
		font-weight: 200;
		color: grey;
	}
`;

export const CarContent = styled.div`
	padding: 15px;
`;
