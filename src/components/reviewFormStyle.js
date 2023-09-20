import styled from "styled-components";

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
	button {
		height: 50px;
		width: 250px;
		border: none;
		border-radius: 5px;
		background-color: ${(props) => props.theme.primaryColor};
	}
`;

export const TextArea = styled.textarea`
	height: 150px;
	width: 750px;
	padding: 5px;
	border-radius: 15px;
	border: none;
	background-color: ${(props) => props.theme.primaryColor};
	resize: none;
`;

export const TextAreaContainer = styled.div``;
export const TextAreaTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	p {
		font-weight: 600;
		font-size: 16px;
	}
`;
