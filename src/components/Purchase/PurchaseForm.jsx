import React from "react";
import { useParams } from "react-router-dom";

export const PurchaseForm = () => {
	const { container_id } = useParams();

	return <div>{container_id}</div>;
};
