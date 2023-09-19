import React, { useState, useEffect } from "react";
import {
	Arrow,
	CardContainer,
	CardFlex,
	CatImg,
	Icon,
	TitleContainer,
} from "./categoryCardStyle";
import DownArrow from "../assets/Arrow-Down.png";
import UpArrow from "../assets/Arrow-Up.png";
import axios from "axios"; // Import Axios for making API requests

export const CategoryCard = ({ id, title, img, icon }) => {
	const [expanded, setExpanded] = useState(false);
	const [categoryData, setCategoryData] = useState(null); // To store category data

	const toggleExpanded = () => {
		setExpanded(!expanded);
	};

	useEffect(() => {
		const fetchCategoryData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/category/details/${id}`
				);
				const data = response.data;
				// console.log(data);
				setCategoryData(data);
			} catch (error) {
				console.error("Error fetching category data: ", error);
			}
		};

		fetchCategoryData();
	}, [id]);

	return (
		<CardContainer key={id} expanded={expanded} onClick={toggleExpanded}>
			<TitleContainer>
				<CardFlex>
					<Icon src={icon} alt="" />
					<Arrow
						src={expanded ? UpArrow : DownArrow}
						alt="Arrow"
						className="arrow"
					/>
					<h2>{title}</h2>
				</CardFlex>
				<CatImg src={img} alt="category" />
			</TitleContainer>
			{expanded && (
				<div className="expanded-content">
					{/* Display the fetched category data */}
					{categoryData ? (
						<>
							<ul>
								{categoryData.types.map((type, index) => (
									<li key={index}>{type.title}</li>
								))}
							</ul>
						</>
					) : (
						<p>Loading category data...</p>
					)}
				</div>
			)}
		</CardContainer>
	);
};
