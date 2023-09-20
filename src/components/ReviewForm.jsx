import React, { useState } from "react";
import { useAuth } from "../hooks/AuthContext";
import {
	FormContainer,
	TextArea,
	TextAreaContainer,
	TextAreaTitle,
} from "./reviewFormStyle";

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
			//Here it's determined what im interacting with and what the value im giving
			//So it could be [Num_stars]: 5
			[name]: value,
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
		<FormContainer onSubmit={handleReviewSubmit}>
			<TextAreaContainer>
				<TextAreaTitle>
					<h2>Skriv en kommentar</h2>
					<div>
						<p>Hvor mange stjerner vil du give?</p>
						<label>
							<input
								type="radio"
								name="num_stars"
								value="1"
								onChange={handleReviewInputChange}
							/>
							1
						</label>
						<label>
							<input
								type="radio"
								name="num_stars"
								value="2"
								onChange={handleReviewInputChange}
							/>
							2
						</label>
						<label>
							<input
								type="radio"
								name="num_stars"
								value="3"
								onChange={handleReviewInputChange}
							/>
							3
						</label>
						<label>
							<input
								type="radio"
								name="num_stars"
								value="4"
								onChange={handleReviewInputChange}
							/>{" "}
							4
						</label>
						<label>
							<input
								type="radio"
								name="num_stars"
								value="5"
								onChange={handleReviewInputChange}
							/>
							5
						</label>
					</div>
				</TextAreaTitle>

				<TextArea
					type="text"
					id="subject"
					name="subject"
					value={newReview.subject}
					onChange={handleReviewInputChange}
					required
				/>
			</TextAreaContainer>
			<button type="submit">Indsend anmeldelse</button>
		</FormContainer>
	);
};
