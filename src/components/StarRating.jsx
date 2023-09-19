import fullStar from "../assets/fullStar.png";
import emptyStar from "../assets/emptyStar.png";

//Function to calculate the average rating of each organisation.
//Take the orgID as a parameter
export const StarRating = ({ orgId, ratings }) => {
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
