import React from "react";
import { useParams } from "react-router-dom";
import { MainContainer } from "../../pages/purchaseStyle";

export const PurchaseForm = () => {
	const { container_id } = useParams();

	return <MainContainer>{container_id}</MainContainer>;
};
