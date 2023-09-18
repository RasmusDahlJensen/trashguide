import React, { useEffect, useState } from "react";
import axios from "axios";
import { SectionCard } from "../components/SectionCard";
import { CardContainer, MainContainer, TitleContainer } from "./sortStyle";
import { Outlet } from "react-router-dom";

export const Sorting = () => {
	const [productArr, setProductArr] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3000/section");
				const data = response.data;

				setProductArr(data);
				setLoading(false); // Set loading to false when data is fetched
				console.log(data);
			} catch (error) {
				console.error("Error fetching data: ", error);
				setLoading(false); // Set loading to false on error
			}
		};

		fetchData();
	}, []);

	return (
		<MainContainer>
			<TitleContainer>
				<h1>Oversigt</h1>
			</TitleContainer>
			<CardContainer>
				{loading ? (
					<p>Loading...</p>
				) : (
					productArr.map((product, index) => (
						<SectionCard key={index} section={product} />
					))
				)}
			</CardContainer>
			<Outlet />
		</MainContainer>
	);
};
