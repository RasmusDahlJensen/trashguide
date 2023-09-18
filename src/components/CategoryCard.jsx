import React from "react";
import { CardContainer, TitleContainer } from "./categoryCardStyle";

export const CategoryCard = ({ id, title, img, icon }) => {
	return (
		<CardContainer key={id}>
			<TitleContainer>
				<img src={icon} alt="" srcset="" />
				<h2>{title}</h2>
			</TitleContainer>
		</CardContainer>
	);
};
