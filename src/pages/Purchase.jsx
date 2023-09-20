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
				<FlexContainer>
					<StepsContainer>Steps</StepsContainer>
					<ContentContainer>
						<div>
							<p>Trin 1</p>
							<h2>Vælg type</h2>
							<p>
								Tation argumentum et usu, dicit viderer evertitur te has. Eu
								dictas concludaturque usu, facete detracto patrioque an per,
								lucilius pertinacia eu vel.
							</p>
						</div>
						<CardContainer>
							{containerData &&
								containerData.map((container) => {
									return (
										<Card
											key={container.id}
											onClick={() => setContainerId(container.id)}
										>
											<img
												src={`http://localhost:3000/assets/images/icons/${container.icon_filename}`}
												alt="Container Icon"
											/>
											<p>{container.name}</p>
										</Card>
									);
								})}
						</CardContainer>
						<div>
							<button>Videre</button>
						</div>
					</ContentContainer>
				</FlexContainer>
			)}
		</MainContainer>
	);
};
