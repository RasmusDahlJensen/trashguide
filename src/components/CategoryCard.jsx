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
	const [allowedTypes, setAllowedTypes] = useState([]);
	const [notAllowedTypes, setNotAllowedTypes] = useState([]);

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

				const allowed = data.types.filter((data) => data.rules.is_allowed);
				const notAllowed = data.types.filter((data) => !data.rules.is_allowed);
				setAllowedTypes(allowed);
				setNotAllowedTypes(notAllowed);

				setCategoryData(data);
			} catch (error) {
				console.error("Error fetching category data: ", error);
			}
		};

		// Fetch category data when the component mounts
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
							<div>
								<h3>Hvad modtager vi?</h3>
								<ul>
									{allowedTypes.map((type) => (
										<li key={type.id}>{type.title}</li>
									))}
								</ul>
							</div>
							<div>
								<h3>Hvad modtager vi ikke?</h3>
								<ul>
									{notAllowedTypes.map((type) => (
										<li key={type.id}>{type.title}</li>
									))}
								</ul>
							</div>
						</>
					) : (
						<p>Loading category data...</p>
					)}
				</div>
			)}
		</CardContainer>
	);
};
