import React, { useEffect, useState } from "react";
import { MainContainer } from "./purchaseStyle";
import axios from "axios";

export const Purchase = () => {
	const [containerData, setContainerData] = useState();
	const [loading, setLoading] = useState();
	const [containerId, setContainerId] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`http://localhost:3000/containers`);
				const data = response.data;
				setContainerData(data);
				console.log(containerData);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data: ", error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<MainContainer>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div>
					<div>Steps</div>
					<div>
						<div>Trin 1</div>
						<div>Vælg type</div>
						<div>
							Tation argumentum et usu, dicit viderer evertitur te has. Eu
							dictas concludaturque usu, facete detracto patrioque an per,
							lucilius pertinacia eu vel.
						</div>
						<>
							{containerData &&
								containerData.map((container) => {
									return <div key={container.id}>{container.name}</div>;
								})}
						</>
					</div>
				</div>
			)}
		</MainContainer>
	);
};
