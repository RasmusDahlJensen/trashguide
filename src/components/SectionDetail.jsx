import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
	CardContainer,
	DetailContainer,
	TitleContainer,
} from "./sectionDetailStyle";
import { CategoryCard } from "./CategoryCard";
import { BackgroundImage } from "../pages/homeStyle";
import bgImage from "../assets/Layout/bg-wave-1.svg";

export const SectionDetail = () => {
	//useParams to get the section_id
	const { section_id } = useParams();
	const [productData, setProductData] = useState();
	const [loading, setLoading] = useState(true);

	//Fetch data based on the section ID, which is determined which section I clicked on and extracted from
	///useParams
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/section/${section_id}?incl_types=true`
				);
				const data = response.data;

				//Define the data and turn off loading afterwards to allow the component to render.
				setProductData(data);
				setLoading(false);
				// console.log(data);
			} catch (error) {
				console.error("Error fetching data: ", error);
				setLoading(false);
			}
		};
		fetchData();
	}, [section_id]);

	return (
		<>
			<DetailContainer>
				{/* Display loading text if the data hasn't been fetched yet to stop rendering errors */}
				{loading ? (
					<p>Loading...</p>
				) : (
					<>
						{/* Title and image */}
						<TitleContainer color={productData.color}>
							<h1>{productData.title}</h1>
							<img src={productData.filepath} alt="" />
						</TitleContainer>
						<CardContainer>
							{/* Map over the productData.categories array */}
							{productData.categories.map((category) => (
								// Send the data as a prop to the category card
								<CategoryCard key={category.id} categoryData={category} />
							))}
						</CardContainer>
					</>
				)}
			</DetailContainer>
			<BackgroundImage src={bgImage} alt="background artwork" />
		</>
	);
};
