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

	const handleReviewInputChange = (e) => {
		const { name, value } = e.target;
		setNewReview({
			...newReview,
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
		<form onSubmit={handleReviewSubmit}>
			<h3>Anmeldelse</h3>
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
