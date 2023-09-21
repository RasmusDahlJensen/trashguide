import styled from "styled-components";

export const MainContainer = styled.main`
	margin-top: 100px;
`;

export const StepsContainer = styled.div`
	background-color: #114d46;
	width: 50%;
	display: flex;
	justify-content: end;
	padding-top: 50px;
	@media (max-width: 900px) {
		display: none;
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	width: 1000px;
	margin: auto;
	border-radius: 15px;
	overflow: hidden;
	width: 100%;
`;

export const ContentContainer = styled.div`
	background-color: #dcdcdc;
	padding: 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	h2 {
		font-weight: 400;
		font-size: 30px;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 50px;
	width: 500px;
	user-select: none;
	.active {
		border: 2px solid;
		border-color: ${(props) => props.theme.tertiaryColor};
		box-sizing: border-box;
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 200px;
	height: 200px;
	cursor: pointer;
	border-radius: 5px;
	background-color: white;

	img {
		width: 50px;
	}
`;

export const ConfirmationContainer = styled.div`
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	height: 300px;
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: end;
	width: 100%;
	gap: 5px;
	input {
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
		border-radius: 5px;
		border: none;
	}
	input[type="number"] {
		-moz-appearance: textfield;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	button {
		padding: 15px;
		width: 150px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border: none;
		background-color: ${(props) => props.theme.primaryColor};
	}
`;
