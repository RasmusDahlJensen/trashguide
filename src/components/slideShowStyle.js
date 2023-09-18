import styled from "styled-components";

export const SlideshowContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 100%;
	overflow: hidden;
	height: 700px;
	display: flex;
	align-items: center;
`;

export const SlideshowWrapper = styled.div`
	display: flex;
	width: 300%; /* Ensure enough width to accommodate three images */
`;

export const SlideshowImage = styled.img`
	width: auto;
	min-width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const ControlButton = styled.button`
	position: absolute;
	top: 50%;
	background-color: rgba(0, 0, 0, 0.2);
	border: none;
	border-radius: 10px;
	padding: 2px;
	cursor: pointer;
	z-index: 1;
	${(props) => (props.direction === "prev" ? "left: 0;" : "right: 0;")};
	&:hover {
		background-color: rgba(0, 0, 0, 0.7);
	}
	img {
		width: 50px;
	}
`;
