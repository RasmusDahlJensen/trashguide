import React, { useEffect, useState } from "react";
import {
	Card,
	CardContainer,
	ContentContainer,
	FlexContainer,
	MainContainer,
	StepsContainer,
} from "./purchaseStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PurchaseStepOne } from "../components/Purchase/PurchaseStepOne";

export const Purchase = () => {
	const [containerData, setContainerData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [containerId, setContainerId] = useState(null);
	const navigate = useNavigate();

	return (
		<MainContainer>
			<PurchaseStepOne />
		</MainContainer>
	);
};
