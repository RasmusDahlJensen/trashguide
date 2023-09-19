import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
			// console.log("loading complete");
		}
	}, [orgData, reviewData]);

	return <div>{loading ? <div>Loading...</div> : <div>{org_id}</div>}</div>;
};
