import React from "react";
import { useParams } from "react-router-dom";

export const RecyclingDetails = () => {
	const { org_id } = useParams();

	return <div>{org_id}</div>;
};
