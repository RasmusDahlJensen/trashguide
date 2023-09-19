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

export const CategoryCard = ({ id, title, img, icon }) => {
	const [expanded, setExpanded] = useState(false);
	const [categoryData, setCategoryData] = useState(null);
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
							<CategoryContainer>
								<CatTitleContainer>
									<h3>Hvad modtager vi?</h3>
								</CatTitleContainer>
								<CategoryCardContainer>
									{allowedTypes.map((type) => (
										<AllowedContainer key={type.id}>
											<h2>{type.title}</h2>
											<p>
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
