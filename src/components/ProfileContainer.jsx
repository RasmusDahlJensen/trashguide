import axios from "axios";
import { useEffect, useState } from "react";

export const ContainerName = ({ orderId }) => {
	const [containerName, setContainerName] = useState("");

	useEffect(() => {
		const fetchContainerData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/containers/${orderId}`
				);
				setContainerName(response.data.name);
			} catch (error) {
				console.error(error);
			}
		};

		fetchContainerData();
	}, [orderId]);

	return containerName;
};

export const ContainerPicture = ({ orderId }) => {
	const [containerSVG, setContainerSVG] = useState("");

	useEffect(() => {
		const fetchContainerData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/containers/${orderId}`
				);
				setContainerSVG(response.data.icon_filename);
			} catch (error) {
				console.error(error);
			}
		};

		fetchContainerData();
	}, [orderId]);

	return (
		<img
			src={`http://localhost:3000/Assets/Images/Icons/${containerSVG}`}
			alt="container"
		/>
	);
};
