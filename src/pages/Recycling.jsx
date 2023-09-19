import React, { useState, useEffect } from "react";
import axios from "axios";

export const Recycling = () => {
	const [orgData, setOrgData] = useState([]);
	const [ratings, setRatings] = useState({});

	useEffect(() => {
		axios
			.get("http://localhost:3000/orgs?attributes=id,name,address,zipcode,city")
			.then((response) => {
				const orgs = response.data;
				setOrgData(orgs);

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

				Promise.all(ratingPromises).then((ratingsData) => {
					const ratingsObject = {};
					ratingsData.forEach(({ orgId, rating }) => {
						ratingsObject[orgId] = rating;
					});

					setRatings(ratingsObject);
				});
			})
			.catch((error) => {
				console.error("Error fetching organization data: ", error);
			});
	}, []);

	const calculateAverageRating = (orgId) => {
		const orgRatings = ratings[orgId];
		if (!orgRatings) {
			return "Ingen stjerner givet";
		}
		const totalStars = orgRatings.reduce(
			(acc, rating) => acc + rating.num_stars,
			0
		);
		const averageRating = totalStars / orgRatings.length;
		return isNaN(averageRating)
			? "Ingen stjerner givet"
			: `Gennemsnitlig vurdering: ${Math.floor(averageRating)} stjerner`;
	};

	return (
		<div>
			{orgData.map((org, index) => (
				<div className="org-card" key={org.id}>
					<h2>{org.name}</h2>
					<p>
						{org.address}, {org.zipcode} {org.city}
					</p>
					<p>{calculateAverageRating(org.id)}</p>
				</div>
			))}
		</div>
	);
};
