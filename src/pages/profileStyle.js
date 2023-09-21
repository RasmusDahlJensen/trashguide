import styled from "styled-components";

export const OrderContainer = styled.main`
	display: flex;
	gap: 50px;
	justify-content: center;
	margin-top: 100px;
	flex-wrap: wrap;
`;

export const OrderCard = styled.div`
	padding: 20px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	img {
		width: 25px;
	}
`;

export const CardContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 15px;
	height: 350px;
`;

export const CardTitle = styled.div`
	display: flex;
	justify-content: space-between;
	img {
		cursor: pointer;
	}
`;

export const ContainerType = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid black;
	width: 100%;
`;

export const UserContainer = styled.div`
	button {
		padding: 15px;
		width: 150px;
		background-color: ${(props) => props.theme.primaryColor};
	}
`;
