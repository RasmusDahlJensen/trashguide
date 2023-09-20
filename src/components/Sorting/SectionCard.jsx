import React from "react";
import { useNavigate } from "react-router-dom";
import {
	CardContainer,
	CardTitle,
	CardImage,
	CardText,
} from "./sectionCardStyle";

export const SectionCard = ({ section }) => {
	const navigate = useNavigate();

	const navigateDetail = (section_id) => {
		navigate(`/sorting/${section_id}`);
	};

	return (
		<CardContainer onClick={() => navigateDetail(section.id)}>
			<CardImage src={section.filepath} alt={section.filename} />
			<CardTitle color={section.color}>
				<CardText>{section.title}</CardText>
			</CardTitle>
		</CardContainer>
	);
};
