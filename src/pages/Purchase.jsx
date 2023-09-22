import React, { useEffect, useState } from "react";
import axios from "axios";
import { PurchaseStepOne } from "../components/Purchase/PurchaseStepOne";
import { PurchaseStepTwo } from "../components/Purchase/PurchaseStepTwo";
import { PurchaseStepThree } from "../components/Purchase/PurchaseStepThree";
import { MainContainer } from "./purchaseStyle";

export const Purchase = () => {
	const [containerData, setContainerData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedContainerId, setSelectedContainerId] = useState(null);
	//Initial step is always 1
	const [currentStep, setCurrentStep] = useState(1);
	//Initial form data
	const [productData, setProductData] = useState({
		fullname: "",
		address: "",
		zipcode: "",
		city: "",
		email: "",
		phone: "",
		container_id: selectedContainerId,
	});
	//Fetch container data for display
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`http://localhost:3000/containers`);
				setContainerData(response.data);
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
		//Spread operator to make sure we only change container id and no other value
		setProductData({
			...productData,
			container_id: containerId,
		});
	};

	//If this function is called we set step to 2
	const navigateToStepTwo = () => {
		if (selectedContainerId) {
			setCurrentStep(2);
		} else {
			return;
		}
	};
	//If this function is called we set step to 3
	const navigateToStepThree = () => {
		if (selectedContainerId) {
			setCurrentStep(3);
		} else {
			return;
		}
	};

	return (
		<MainContainer>
			{loading ? (
				<div>Loading...</div>
			) : // If we're on step 1 render this component
			currentStep === 1 ? (
				<>
					{/* Call the component with props */}
					<PurchaseStepOne
						// Pass the fetched data
						containerData={containerData}
						// Pass it the container ID state for its CSS functionality
						selectedContainerId={selectedContainerId}
						// Allows it to set the ID on each product
						handleContainerSelection={handleContainerSelection}
						// Allows the button to render the next component
						navigateToStepTwo={navigateToStepTwo}
					/>
				</>
			) : // If we're on step 2 render this component
			currentStep === 2 ? (
				<>
					<PurchaseStepTwo
						// Pass it the relevant props for data and functions
						navigateToStepThree={navigateToStepThree}
						productData={productData}
						setProductData={setProductData}
					/>
				</>
			) : // If we're on step 3 render this component
			currentStep === 3 ? (
				<>
					{/* Pass it the final product data for the confirmation screen */}
					<PurchaseStepThree productData={productData} />
				</>
			) : null}
		</MainContainer>
	);
};
