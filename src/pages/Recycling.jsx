import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import fullStar from "../assets/fullStar.png";
import emptyStar from "../assets/emptyStar.png";
import GoogleMaps from "../components/GoogleMaps";

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

				Promise.all(ratingPromises)
					.then((ratingsData) => {
						const ratingsObject = {};
						ratingsData.forEach(({ orgId, rating }) => {
							ratingsObject[orgId] = rating;
						});
						setRatings(ratingsObject);
					})
					.finally(() => {
						setLoading(false); // Set loading to false when data fetching is done
					});
			})
			.catch((error) => {
				console.error("Error fetching organization data: ", error);
				setLoading(false); // Set loading to false on error too
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

		if (isNaN(averageRating)) {
			return "Ingen stjerner givet";
		}

		const stars = [];
		for (let i = 0; i < 5; i++) {
			if (i < Math.floor(averageRating)) {
				stars.push(<img key={i} src={fullStar} alt="Full Star" />);
			} else {
				stars.push(<img key={i} src={emptyStar} alt="Empty Star" />);
			}
		}

		return stars;
	};

	const navigate = useNavigate();

	const navigateDetail = (org_id) => {
		navigate(`/recycling/${org_id}`);
	};

	return (
		<div>
			{loading ? (
				<div>Loading...</div>
			) : (
				orgData.map((org) => (
					<div key={org.id} onClick={() => navigateDetail(org.id)}>
						<h2>{org.name}</h2>
						<p>
							{org.address} {org.zipcode} {org.city}
						</p>
						<p>{calculateAverageRating(org.id)}</p>
						<GoogleMaps orgId={org.id} />
					</div>
				))
			)}

			<Outlet />
		</div>
	);
};
