import React from "react";
import { useParams } from "react-router-dom";

export const SectionDetail = () => {
	const { section_id } = useParams();

	return <div>{section_id}</div>;
};
