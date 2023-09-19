import styled from "styled-components";

export const MainContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 50px;
	img {
		width: 200px;
	}
`;

export const FormContainer = styled.div`
	background-color: white;
	border-radius: 15px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	padding: 50px;
`;

export const FormImage = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		font-size: 24px;
	}
`;

export const FormFlex = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const FormButton = styled.button`
	padding: 12px;
	width: 150px;
	color: white;
	background-color: ${(props) => props.theme.secondaryColor};
	border-radius: 10px;
	border: none;
`;

export const FormInput = styled.input`
	padding: 10px;
	width: 300px;
	border-radius: 10px;
	margin-bottom: 20px;
	border: ${(props) => (props.hasError ? "2px solid red" : "1px solid #ccc")};
	margin-top: ${(props) => (props.hasError ? "-1px" : "")};
	margin-left: ${(props) => (props.hasError ? "-1px" : "")};
`;
