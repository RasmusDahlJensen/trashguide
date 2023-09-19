import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import fullStar from "../assets/fullStar.png";
import emptyStar from "../assets/emptyStar.png";
import GoogleMaps from "../components/GoogleMaps";
import { CardContainer, MainContainer } from "./RecyclingStyle";

export const Recycling = () => {
	const [orgData, setOrgData] = useState([]);
	const [ratings, setRatings] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("http://localhost:3000/orgs?attributes=id,name,address,zipcode,city")
			.then((response) => {
				const orgs = response.data;
				setOrgData(orgs);
				console.log(orgs);

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
						});
				});

				//Using promise.alæl to wait for all promises to resolve
				Promise.all(ratingPromises).then((ratingsData) => {
					const ratingsObject = {};
					//Fill the object with each OrgID and their ratings
					ratingsData.forEach(({ orgId, rating }) => {
						ratingsObject[orgId] = rating;
					});

					//Take the results and put it in the setRatings state
					setRatings(ratingsObject);
					setLoading(false);
					console.log(ratingsObject);
				});
			})
			.catch((error) => {
				console.error("Error fetching organization data: ", error);
				setLoading(false);
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

		//Checking if the rating isnt a number, in which case it'll give a message there's no reviews
		if (isNaN(averageRating)) {
			return "Ingen stjerner givet";
		}

		//A for loop to determine how many full stars and how many empty stars
		//it loops over the rating itself, and as the iterator is lower than the rating
		//It'll add a full star, otherwise it'll add an empty star
		const stars = [];
		for (let i = 0; i < 5; i++) {
			if (i < Math.floor(averageRating)) {
				stars.push(<img key={i} src={fullStar} alt="Full Star" />);
			} else {
				stars.push(<img key={i} src={emptyStar} alt="Empty Star" />);
			}
		}
		//Once the loop is finished it'll return the stars and display them on the site when its called
		return stars;
	};

	const navigate = useNavigate();

	const navigateDetail = (org_id) => {
		navigate(`/recycling/${org_id}`);
	};

	return (
		<MainContainer>
			{loading ? (
				<div>Loading...</div>
			) : (
				orgData.map((org) => (
					<CardContainer key={org.id} onClick={() => navigateDetail(org.id)}>
						<GoogleMaps orgId={org.id} height={"100%"} width={"200px"} />
						<h2>{org.name}</h2>
						<p>
							{org.address} {org.zipcode} {org.city}
						</p>
						<p>{calculateAverageRating(org.id)}</p>
						<p>{ratings[org.id].length}</p>
					</CardContainer>
				))
			)}

			<Outlet />
		</MainContainer>
	);
};
