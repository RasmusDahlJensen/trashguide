import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContainer, MapsContainer } from "./recyclingDetail";
import GoogleMaps from "./GoogleMaps";

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

	return (
		<MainContainer>
			{loading ? (
				<div>Loading...</div>
			) : (
				<>
					<>
						<GoogleMaps orgId={org_id} height={"100%"} width={"400px"} />
					</>
					<div>
						
					</div>
				</>
			)}
		</MainContainer>
	);
};
