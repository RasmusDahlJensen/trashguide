import styled from "styled-components";

export const MainContainer = styled.main``;

export const FormContainer = styled.div`
	background-color: white;
	padding-bottom: 1px;
	p {
		text-align: center;
	}
`;

export const InputContainer = styled.div``;

export const FormButton = styled.button``;

export const FormInput = styled.input`
	padding: 10px;
	width: 300px;
	border-radius: 10px;
	margin-bottom: 20px;
	border: ${(props) => (props.hasError ? "2px solid red" : "1px solid #ccc")};
	margin-top: ${(props) => (props.hasError ? "-1px" : "")};
	margin-left: ${(props) => (props.hasError ? "-1px" : "")};
`;
