import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import GoogleMaps from "../components/Recycling/GoogleMaps";
import {
	CarContent,
	CardContainer,
	MainContainer,
	RatingContainer,
} from "./RecyclingStyle";
import bgImage from "../assets/Layout/bg-wave-2.svg";
import { BackgroundImage } from "./homeStyle";
import { StarRating } from "../components/StarRating";

export const Recycling = () => {
	const [orgData, setOrgData] = useState([]);
	const [ratings, setRatings] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			// Fetch all organisations
			.get("http://localhost:3000/orgs?attributes=id,name,address,zipcode,city")
			.then((response) => {
				setOrgData(response.data);

				//Create an array of promises to fetch rating for each organisation
				//Once finished we'll have an array of objects, each containing org ID and an array of its ratings
				const ratingPromises = response.data.map((org) => {
					return (
						axios
							//Fetch for a specific organisation
							.get(`http://localhost:3000/reviews/${org.id}`)
							.then((response) => ({ orgId: org.id, rating: response.data }))
							.catch((error) => {
								console.error(
									`Error fetching rating data for org ID ${org.id}: `,
									error
								);
							})
					);
				});
				//Using promise.alæl to wait for all promises to resolve
				Promise.all(ratingPromises).then((ratingsData) => {
					//Empty object to organize the data
					const ratingsObject = {};
					//Here we fill the object with org IDs and their ratings
					ratingsData.forEach(({ orgId, rating }) => {
						// Object property assignement to have org IDs and index and ratings as its value
						ratingsObject[orgId] = rating;
					});
					//Take the results and put it in the setRatings state
					setRatings(ratingsObject);
					//Stop loading so content can render
					setLoading(false);
				});
			})
			.catch((error) => {
				console.error("Organization data: ", error);
				setLoading(false);
			});
	}, []);

	const navigate = useNavigate();
	//Change page to the chosen card
	const navigateDetail = (org_id) => {
		navigate(`/recycling/${org_id}`);
	};

	return (
		<>
			<MainContainer>
				{loading ? (
					<div>Loading...</div>
				) : (
					orgData.map((org) => (
						<CardContainer key={org.id} onClick={() => navigateDetail(org.id)}>
							<GoogleMaps orgId={org.id} height={"200px"} width={"100%"} />
							<CarContent>
								<h2>{org.name}</h2>
								<p>
									{org.address} {org.zipcode} {org.city}
								</p>
								<RatingContainer>
									<figure>
										<StarRating orgId={org.id} />
									</figure>
									<p>({ratings[org.id]?.length} anmeldelser)</p>
								</RatingContainer>
							</CarContent>
						</CardContainer>
					))
				)}
			</MainContainer>
			<BackgroundImage src={bgImage} alt="background artwork" />
		</>
	);
};
