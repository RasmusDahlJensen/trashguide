import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	MainContainer,
	RecycleDetails,
	ReviewCard,
	ReviewContainer,
	TextArea,
	TextBoxContainer,
} from "./recyclingDetail";
import GoogleMaps from "./GoogleMaps";
import fullStar from "../assets/fullStar.png";
import emptyStar from "../assets/emptyStar.png";
import { StarRating } from "./StarRating";
import { useAuth } from "../hooks/AuthContext";
import { LoginForm } from "./LoginForm";
import { ReviewForm } from "./ReviewForm";

export const RecyclingDetails = () => {
	const [orgData, setOrgData] = useState();
	const [reviewData, setReviewData] = useState();
	const [loading, setLoading] = useState(true);
	const { org_id } = useParams();
	const { isLoggedIn } = useAuth();

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
			// console.log("Orgdata:", orgData, "ReviewData", reviewData);
			// console.log("loading complete");
		}
	}, [orgData, reviewData]);

	//A lesser version of the component as I dont need the averaging feature.
	const ReviewRating = (rating) => {
		// console.log(rating);
		// Check if numStars is a valid number
		if (isNaN(rating)) {
			return "Ingen stjerner givet";
		}
		// Create an array of stars based on the numStars value
		const stars = [];
		for (let i = 0; i < 5; i++) {
			if (i < rating) {
				stars.push(<img key={i} src={fullStar} alt="Full Star" />);
			} else {
				stars.push(<img key={i} src={emptyStar} alt="Empty Star" />);
			}
		}

		return stars;
	};

	return (
		<MainContainer>
			{loading ? (
				<div>Loading...</div>
			) : (
				<>
					<GoogleMaps orgId={org_id} height={"100%"} width={"400px"} />
					<RecycleDetails>
						<h2>{orgData.name}</h2>
						<div>
							<StarRating orgId={org_id} />
						</div>
						<p>{orgData.address}</p>
						<p>
							{orgData.zipcode} {orgData.city}
						</p>
						<p>{orgData.country}</p>
					</RecycleDetails>
					<TextArea>
						{isLoggedIn ? (
							<ReviewForm />
						) : (
							<TextBoxContainer>
								<p>Du skal være logget ind for at skrive en anmeldelse</p>
								<LoginForm />
							</TextBoxContainer>
						)}
					</TextArea>
					<ReviewContainer>
						{reviewData.map((review) => {
							return (
								<ReviewCard>
									<p>
										{review.user.firstname} {review.user.lastname}
									</p>
									<div>{ReviewRating(review.num_stars)}</div>
									<p>{review.subject}</p>
								</ReviewCard>
							);
						})}
					</ReviewContainer>
				</>
			)}
		</MainContainer>
	);
};
