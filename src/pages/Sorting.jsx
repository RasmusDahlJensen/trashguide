import React, { useEffect, useState } from "react";
import axios from "axios";
import { SectionCard } from "../components/Sorting/SectionCard";
import {
	BackgroundImage,
	CardContainer,
	MainContainer,
	SearchBar,
	TitleContainer,
} from "./sortStyle";
import { Outlet } from "react-router-dom";
import bgImage from "../assets/Layout/bg-waves-1.svg";

export const Sorting = () => {
	const [productArr, setProductArr] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");

	//Fetch section data
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3000/section");
				const data = response.data;

				//Set the data in the state and then stop loading to the data can render
				setProductArr(data);
				setLoading(false);
				// console.log(data);
			} catch (error) {
				console.error("Error fetching data: ", error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	// Change the state with the input that's put in the search bar
	const handleSearchInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	// Item filter based on search state data
	const filteredProductArr = productArr.filter((product) =>
		product.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<>
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
					{/* Show filtered items, if none is found dispaly error message */}
					{/* If nothing is typed it it'll display the entire array */}
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
			<BackgroundImage src={bgImage} alt="background artwork" />
		</>
	);
};
