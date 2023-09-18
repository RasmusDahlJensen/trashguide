import React from "react";
import { useNavigate } from "react-router-dom";
import { CardButton, CardContainer } from "./sectionCardStyle";

export const SectionCard = ({ section }) => {
	const navigate = useNavigate();

	const navigateDetail = (section_id) => {
		navigate(`/sorting/${section_id}`);
	};

	return (
		<CardContainer>
			<img src={section.filepath} alt="" />
			<CardButton
				color={section.color}
				onClick={() => navigateDetail(section.id)}
				alt={section.filename}
			>
				<p>{section.title}</p>
			</CardButton>
		</CardContainer>
	);
};
