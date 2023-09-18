import React from "react";
import { useNavigate } from "react-router-dom";
import {
	CardContainer,
	ImgContainer,
	ImgTitleContainer,
	TitleContainer,
} from "./sectionCardStyle";

export const SectionCard = ({ section }) => {
	const navigate = useNavigate();

	const navigateDetail = (section_id) => {
		navigate(`/sorting/${section_id}`);
	};

	return (
		<CardContainer>
			<img src={section.filepath} alt="" />
			<button onClick={() => navigateDetail(section.id)} className="readMore">
				<p>{section.title}</p>
			</button>
		</CardContainer>
	);
};
