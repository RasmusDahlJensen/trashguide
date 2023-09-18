import React, { useEffect, useState } from "react";
import axios from "axios";
import { SectionCard } from "../components/SectionCard";
import {
	CardContainer,
	MainContainer,
	SearchBar,
	TitleContainer,
} from "./sortStyle";
import { Outlet } from "react-router-dom";

export const Sorting = () => {
	const [productArr, setProductArr] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3000/section");
				const data = response.data;

				setProductArr(data);
				setLoading(false);
				console.log(data);
			} catch (error) {
				console.error("Error fetching data: ", error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	// Handle inputs
	const handleSearchInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	// Item filter based on search
	const filteredProductArr = productArr.filter((product) =>
		product.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<MainContainer>
			<TitleContainer>
				<h2>Din guide</h2>
				<h3>til en sund affaldssortering</h3>
				<SearchBar
					type="text"
					placeholder="Søg på affald"
					value={searchQuery}
					onChange={handleSearchInputChange}
				/>
			</TitleContainer>
			<CardContainer>
				{loading ? (
					<p>Loading...</p>
				) : filteredProductArr.length === 0 ? (
					<p>Ingen sektioner fundet</p>
				) : (
					filteredProductArr.map((product, index) => (
						<SectionCard key={index} section={product} />
					))
				)}
			</CardContainer>
			<Outlet />
		</MainContainer>
	);
};
