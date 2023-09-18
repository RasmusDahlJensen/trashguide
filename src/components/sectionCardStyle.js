import styled from "styled-components";

export const CardContainer = styled.div``;

export const CardButton = styled.button`
	background-color: #${(props) => props.color}; /* Use template string to add # */
`;
