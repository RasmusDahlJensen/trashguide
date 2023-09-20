import React, { useState } from "react";
import { useAuth } from "../hooks/AuthContext";

export const ReviewForm = ({ org_id }) => {
	const { userData } = useAuth();

	const [newReview, setNewReview] = useState({
		org_id: org_id,
		subject: "",
		comment: "Ikke gyldig",
		num_stars: 1,
		date: new Date().toISOString(),
		user_id: userData.id,
	});
	//Change values for the Review state depending on what you interact with
	const handleReviewInputChange = (e) => {
		const { name, value } = e.target;
		setNewReview({
			//Spread operator to preserve teh other properties and only update what I'm interacting with
			...newReview,
			[name]: value,
		});
	};
	//Change the value for the radio buttons to determine the amount of stars
	const handleRatingChange = (e) => {
		setNewReview({
			//Spread operator to preserve the other properties of the state and only update the stars
			...newReview,
			num_stars: e.target.value,
		});
	};

	const handleReviewSubmit = async (e) => {
		e.preventDefault();

		try {
			const accessToken = localStorage.getItem("access_token");

			if (!accessToken) {
				console.error("Access token not found in localStorage");
				return;
			}

			const response = await fetch("http://localhost:3000/reviews", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(newReview),
			});
			window.location.reload(true);
		} catch (error) {
			console.error("Error posting review:", error);
		}
	};

	return (
		<form onSubmit={handleReviewSubmit}>
			<h3>Anmeldelse</h3>
			<label>
				<input
					type="radio"
					name="num_stars"
					value="1"
					onChange={handleRatingChange}
				/>
				1
			</label>
			<label>
				<input
					type="radio"
					name="num_stars"
					value="2"
					onChange={handleRatingChange}
				/>
				2
			</label>
			<label>
				<input
					type="radio"
					name="num_stars"
					value="3"
					onChange={handleRatingChange}
				/>
				3
			</label>
			<label>
				<input
					type="radio"
					name="num_stars"
					value="4"
					onChange={handleRatingChange}
				/>{" "}
				4
			</label>
			<label>
				<input
					type="radio"
					name="num_stars"
					value="5"
					onChange={handleRatingChange}
				/>
				5
			</label>
			<div>
				<input
					type="text"
					id="subject"
					name="subject"
					placeholder="Comment"
					value={newReview.subject}
					onChange={handleReviewInputChange}
					required
				/>
			</div>
			<button type="submit">Indsend anmeldelse</button>
		</form>
	);
};
