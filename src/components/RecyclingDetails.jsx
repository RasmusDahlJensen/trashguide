import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContainer } from "./recyclingDetail";
import GoogleMaps from "./GoogleMaps";
import fullStar from "../assets/fullStar.png";
import emptyStar from "../assets/emptyStar.png";
import { StarRating } from "./StarRating";

export const RecyclingDetails = () => {
	const [orgData, setOrgData] = useState();
	const [reviewData, setReviewData] = useState();
	const [loading, setLoading] = useState(true);
	const { org_id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/orgs/${org_id}`
				);
				const data = response.data;
				setOrgData(data);
			} catch (error) {
				console.error("Error fetching data: ", error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/reviews/${org_id}`
				);
				const data = response.data;
				setReviewData(data);
			} catch (error) {
				console.error("Error fetching data: ", error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		if (orgData && reviewData) {
			setLoading(false);
			console.log("Orgdata:", orgData, "ReviewData", reviewData);
			// console.log("loading complete");
		}
	}, [orgData, reviewData]);

	// //a lesser version of the component as I dont need the averaging feature.
	// const ReviewRating = ({ rating }) => {
	// 	// Check if numStars is a valid number
	// 	if (isNaN(numStars)) {
	// 		return "Ingen stjerner givet";
	// 	}
	// 	// Create an array of stars based on the numStars value
	// 	const stars = [];
	// 	for (let i = 0; i < 5; i++) {
	// 		if (i < numStars) {
	// 			stars.push(<img key={i} src={fullStar} alt="Full Star" />);
	// 		} else {
	// 			stars.push(<img key={i} src={emptyStar} alt="Empty Star" />);
	// 		}
	// 	}

	// 	return stars;
	// };

	return (
		<MainContainer>
			{loading ? (
				<div>Loading...</div>
			) : (
				<>
					<GoogleMaps orgId={org_id} height={"100%"} width={"400px"} />
					<div>{orgData.name}</div>
					<div>
						{/* Pass the reviewData directly to the StarRating component */}
						<StarRating orgId={org_id} />
					</div>
					<div>{orgData.address}</div>
					<div>
						<div>{orgData.zipcode}</div>
						<div>{orgData.city}</div>
					</div>
					<div>{orgData.country}</div>
				</>
			)}
		</MainContainer>
	);
};
