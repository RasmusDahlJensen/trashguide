import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Recycling = () => {
	const [orgData, setOrgData] = useState([]);
	const [ratings, setRatings] = useState({});

	useEffect(() => {
		axios
			//Fetch organisation data
			.get("http://localhost:3000/orgs?attributes=id,name,address,zipcode,city")
			.then((response) => {
				const orgs = response.data;
				setOrgData(orgs);

				//Create an array of promises to fetch rating for each organisation
				const ratingPromises = orgs.map((org) => {
					return axios
						.get(`http://localhost:3000/reviews/${org.id}`)
						.then((response) => ({ orgId: org.id, rating: response.data }))
						.catch((error) => {
							console.error(
								`Error fetching rating data for org ID ${org.id}: `,
								error
							);
							return null;
						});
				});
				//Using promise.alæl to wait for all promises to resolve
				Promise.all(ratingPromises).then((ratingsData) => {
					const ratingsObject = {};
					//Fill an object with each OrgID and their ratings
					ratingsData.forEach(({ orgId, rating }) => {
						ratingsObject[orgId] = rating;
					});
					//Take the results and put it in the setRatings state
					setRatings(ratingsObject);
				});
			})
			.catch((error) => {
				console.error("Error fetching organization data: ", error);
			});
	}, []);

	//Function to calculate the average rating of each organisation.
	//Take the orgID as a parameter
	const calculateAverageRating = (orgId) => {
		//Look in the object for the organisation rating for the ID given in the paramter
		const orgRatings = ratings[orgId];

		//Check if orgRatings exist
		if (!orgRatings) {
			return "Ingen stjerner givet"; 
		}

		//Here we use reduce to calculate the total amount of stars an organisation has.
		//This iterates over each instance of rating and adds it to the accumulator
		const totalStars = orgRatings.reduce(
			(acc, rating) => acc + rating.num_stars,
			0
		);
		//Basic arithmetics to calculate the average rating based on the amount of stars
		const averageRating = totalStars / orgRatings.length;
		//Using a ternary operator we check first check if the averageRating isnt a number
		//In which case the organisation doesnt have any reviews and we return  a message
		//Otherwise we show the average numer of stars for the organisation
		return isNaN(averageRating)
			? "Ingen stjerner givet"
			: `${Math.floor(averageRating)}`;
	};

	const navigate = useNavigate();

	const navigateDetail = (section_id) => {
		navigate(`/recycling/${section_id}`);
	};

	return (
		<div>
			{orgData.map((org) => (
				<div key={org.id} onClick={() => navigateDetail(org.id)}>
					<h2>{org.name}</h2>
					<p>
						{org.address} {org.zipcode} {org.city}
					</p>
					<p>{calculateAverageRating(org.id)}</p>
				</div>
			))}
		</div>
	);
};
