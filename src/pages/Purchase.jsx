import React, { useEffect, useState } from "react";
import axios from "axios";
import { PurchaseStepOne } from "../components/Purchase/PurchaseStepOne";
import { PurchaseStepTwo } from "../components/Purchase/PurchaseStepTwo";
import { MainContainer } from "./purchaseStyle";

export const Purchase = () => {
	const [containerData, setContainerData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedContainerId, setSelectedContainerId] = useState(null);
	const [currentStep, setCurrentStep] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`http://localhost:3000/containers`);
				const data = response.data;
				setContainerData(data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data: ", error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const handleContainerSelection = (containerId) => {
		setSelectedContainerId(containerId);
	};

	const navigateToStepTwo = () => {
		if (selectedContainerId) {
			setCurrentStep(2);
		} else {
			return;
		}
	};

	return (
		<MainContainer>
			{loading ? (
				<div>Loading...</div>
			) : currentStep === 1 ? (
				<>
					{/* Call the component with props */}
					<PurchaseStepOne
						//Pass teh fetched data
						containerData={containerData}
						//Pass it the container ID state for its CSS functionality
						selectedContainerId={selectedContainerId}
						//Alælows it to set the ID on each product
						handleContainerSelection={handleContainerSelection}
						//Allows the button to render the next component
						navigateToStepTwo={navigateToStepTwo}
					/>
				</>
			) : currentStep === 2 ? (
				<>
					<PurchaseStepTwo selectedContainerId={selectedContainerId} />
				</>
			) : //Render nothing if there's not a step 1 or 2
			null}
		</MainContainer>
	);
};
