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
import { Outlet, useNavigate } from "react-router-dom";

export const Purchase = () => {
	const [containerData, setContainerData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [containerId, setContainerId] = useState(null);
	const navigate = useNavigate();

	const navigateDetail = (container_id) => {
		if (containerId) {
			navigate(`/purchase/${container_id}`);
		} else {
			return;
		}
	};

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

	return (
		<MainContainer>
			{loading ? (
				<div>Loading...</div>
			) : (
				<FlexContainer>
					<StepsContainer>
						<figure>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="55"
								height="184"
								viewBox="0 0 55 184"
							>
								<g id="Navi" transform="translate(0.423)">
									<g
										id="Ellipse_1_copy"
										data-name="Ellipse 1 copy"
										transform="translate(-0.423)"
										fill="rgba(107,89,211,0)"
										stroke="#d8eadb"
										stroke-linejoin="round"
										stroke-width="3"
									>
										<circle cx="27.5" cy="27.5" r="27.5" stroke="none" />
										<circle cx="27.5" cy="27.5" r="26" fill="none" />
									</g>
									<circle
										id="Ellipse_1"
										data-name="Ellipse 1"
										cx="20.5"
										cy="20.5"
										r="20.5"
										transform="translate(6.577 7)"
										fill="#d8eadb"
									/>
									<circle
										id="Ellipse_1_copy_2"
										data-name="Ellipse 1 copy 2"
										cx="20.5"
										cy="20.5"
										r="20.5"
										transform="translate(6.577 143)"
										fill="#bcbdbd"
									/>
									<text
										id="_1"
										data-name="1"
										transform="translate(23.691 32.5)"
										font-size="16"
										font-family="SegoeUI, Segoe UI"
									>
										<tspan x="0" y="0">
											1
										</tspan>
									</text>
									<text
										id="_2"
										data-name="2"
										transform="translate(22.691 169.5)"
										fill="#f9f9f9"
										font-size="16"
										font-family="SegoeUI, Segoe UI"
									>
										<tspan x="0" y="0">
											2
										</tspan>
									</text>
									<rect
										id="Rectangle_2"
										data-name="Rectangle 2"
										width="3"
										height="88"
										transform="translate(25.577 55)"
										fill="#b8b9b9"
									/>
									<rect
										id="Rectangle_2_copy"
										data-name="Rectangle 2 copy"
										width="3"
										height="40"
										transform="translate(25.577 55)"
										fill="#d8eadb"
									/>
								</g>
							</svg>
						</figure>
					</StepsContainer>
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
							{containerData.map((container) => (
								<Card
									key={container.id}
									onClick={() => setContainerId(container.id)}
									className={containerId === container.id ? "active" : ""}
								>
									<img
										src={`http://localhost:3000/assets/images/icons/${container.icon_filename}`}
										alt="Container Icon"
										draggable="false"
									/>
									<p>{container.name}</p>
								</Card>
							))}
						</CardContainer>
						<div>
							<button onClick={() => navigateDetail(containerId)}>
								Videre
							</button>
						</div>
					</ContentContainer>
				</FlexContainer>
			)}
		</MainContainer>
	);
};
