import React, { useState, useEffect } from "react";
import {
	AllowedContainer,
	Arrow,
	CardContainer,
	CardFlex,
	CatImg,
	CatTitleContainer,
	CategoryCardContainer,
	CategoryContainer,
	Icon,
	NotAllowedContainer,
	TitleContainer,
} from "./categoryCardStyle";
import DownArrow from "../assets/Arrow-Down.png";
import UpArrow from "../assets/Arrow-Up.png";
import axios from "axios";

//Here we have the params for the props
export const CategoryCard = ({ categoryData }) => {
	const [expanded, setExpanded] = useState(false);
	const [allowedTypes, setAllowedTypes] = useState([]);
	const [notAllowedTypes, setNotAllowedTypes] = useState([]);

	// Expanded toggle state
	const toggleExpanded = () => {
		setExpanded(!expanded);
	};

	// We fetch the detail data for the sections
	useEffect(() => {
		const fetchCategoryData = async () => {
			try {
				// Use categoryData.id to fetch data for this category
				const response = await axios.get(
					`http://localhost:3000/category/details/${categoryData.id}`
				);
				const data = response.data;

				// Filter the data based on if it's allowed in this particular sorting or not
				const allowed = data.types.filter((data) => data.rules.is_allowed);
				const notAllowed = data.types.filter((data) => !data.rules.is_allowed);

				// Set the states with the data with allowed and unallowed data
				setAllowedTypes(allowed);
				setNotAllowedTypes(notAllowed);
			} catch (error) {
				console.error("Error fetching category data: ", error);
			}
		};

		fetchCategoryData();
	}, [categoryData.id]);

	return (
		// Onclick to toggle the expanded section of the card
		<CardContainer
			key={categoryData.id}
			expanded={expanded}
			onClick={toggleExpanded}
		>
			<TitleContainer>
				<CardFlex>
					<Icon src={categoryData.icon_filepath} alt="" />
					<Arrow
						src={expanded ? UpArrow : DownArrow}
						alt="Arrow"
						className="arrow"
					/>
					<h2>{categoryData.title}</h2>
				</CardFlex>
				<CatImg src={categoryData.image_filepath} alt="category" />
			</TitleContainer>
			{/* When expanded is toggled this data is displayed */}
			{expanded && (
				<div className="expanded-content">
					{/* Display the fetched category data */}
					{categoryData ? (
						<>
							<CategoryContainer>
								<CatTitleContainer>
									<h3>Hvad modtager vi?</h3>
								</CatTitleContainer>
								<CategoryCardContainer>
									{allowedTypes.map((type) => (
										<AllowedContainer key={type.id}>
											<h2>{type.title}</h2>
											<p>
												{/* Ternary operator to determine what sorting options exist */}
												{type.rules.is_home
													? "Det kan sorteres der hjemme"
													: "Det kan ikke sorteres der hjemme"}
											</p>
											<p>
												{type.rules.is_station
													? "Det kan sorteres på stationen"
													: "Det kan ikke sorteres på stationen"}
											</p>
										</AllowedContainer>
									))}
								</CategoryCardContainer>
							</CategoryContainer>
							<CategoryContainer>
								<CatTitleContainer>
									<h3>Hvad modtager vi ikke?</h3>
								</CatTitleContainer>

								<CategoryCardContainer>
									{/* Not allowed types are printed here */}
									{notAllowedTypes.map((type) => (
										<NotAllowedContainer key={type.id}>
											<h2>{type.title}</h2>
										</NotAllowedContainer>
									))}
								</CategoryCardContainer>
							</CategoryContainer>
						</>
					) : (
						<p>Loading category data...</p>
					)}
				</div>
			)}
		</CardContainer>
	);
};
