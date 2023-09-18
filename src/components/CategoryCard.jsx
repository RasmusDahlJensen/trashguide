import React, { useState } from "react";
import { Arrow, CardContainer, TitleContainer } from "./categoryCardStyle";
import DownArrow from "../assets/Arrow-Down.png";
import UpArrow from "../assets/Arrow-Up.png";

export const CategoryCard = ({ id, title, img, icon }) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpanded = () => {
		setExpanded(!expanded);
	};

	return (
		<CardContainer key={id} expanded={expanded} onClick={toggleExpanded}>
			<TitleContainer>
				<img src={icon} alt="" />
				<h2>{title}</h2>
			</TitleContainer>
			<Arrow
				src={expanded ? UpArrow : DownArrow}
				alt="Arrow"
				className="arrow"
			/>
			{expanded && (
				<div className="expanded-content">
					{/* Expanded content placeholder */}
					add content pls
				</div>
			)}
		</CardContainer>
	);
};
