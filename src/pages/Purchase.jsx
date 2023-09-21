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
	const [currentStep, setCurrentStep] = useState(1);
	const [productData, setProductData] = useState({
		fullname: "",
		address: "",
		zipcode: "",
		city: "",
		email: "",
		phone: "",
		container_id: selectedContainerId,
	});

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
		setProductData({
			...productData,
			container_id: containerId,
		});
	};

	const navigateToStepTwo = () => {
		if (selectedContainerId) {
			setCurrentStep(2);
		} else {
			return;
		}
	};

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
			) : currentStep === 1 ? (
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
			) : currentStep === 2 ? (
				<>
					<PurchaseStepTwo
						navigateToStepThree={navigateToStepThree}
						productData={productData}
						setProductData={setProductData}
					/>
				</>
			) : currentStep === 3 ? (
				<>
					<PurchaseStepThree productData={productData} />
				</>
			) : null}
		</MainContainer>
	);
};
