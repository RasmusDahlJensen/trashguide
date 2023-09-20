import fullStar from "../assets/fullStar.png";
import emptyStar from "../assets/emptyStar.png";
import { useEffect, useState } from "react";
import axios from "axios";

//Function to calculate the average rating of each organisation.
//Take the orgID and ratings as a parameter
export const StarRating = ({ orgId }) => {
	const [ratings, setRatings] = useState([]);
	const [loading, setLoading] = useState(true);

	// Fetch reviews for the organization when the component mounts
	useEffect(() => {
		axios
			.get(`http://localhost:3000/reviews/${orgId}`)
			.then((response) => {
				setRatings(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching reviews: ", error);
				setLoading(false);
			});
	}, [orgId]);

	// If still loading, display a loading message
	if (loading) {
		return <div>Loading...</div>;
	}

	// If there are no ratings, display a message
	if (!ratings) {
		return "Ingen stjerner givet";
	}

	//Here we use reduce to calculate the total amount of stars an organisation has.
	//This iterates over each instance of rating and adds it to the accumulator
	const totalStars = ratings.reduce((acc, rating) => acc + rating.num_stars, 0);

	//Basic arithmetics to calculate the average rating based on the amount of stars
	const averageRating = totalStars / ratings.length;

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
