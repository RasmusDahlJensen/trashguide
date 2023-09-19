import React, { useState } from "react";
import {
	Arrow,
	CardContainer,
	Icon,
	TitleContainer,
} from "./categoryCardStyle";
import DownArrow from "../assets/Arrow-Down.png";
import UpArrow from "../assets/Arrow-Up.png";

export const CategoryCard = ({ id, title, img, icon, categories }) => {
	const [expanded, setExpanded] = useState(false);
	const toggleExpanded = () => {
		setExpanded(!expanded);
	};

	return (
		<CardContainer key={id} expanded={expanded} onClick={toggleExpanded}>
			<TitleContainer>
				<Icon src={icon} alt="" />
				<h2>{title}</h2>
				<Arrow
					src={expanded ? UpArrow : DownArrow}
					alt="Arrow"
					className="arrow"
				/>
				<img src={img} alt="" srcset="" />
			</TitleContainer>

			{expanded && (
				<div className="expanded-content">
					{console.log(categories)}
					{/* Expanded content placeholder */}
					add content pls
				</div>
			)}
		</CardContainer>
	);
};
