import React, { useState, useEffect } from "react";
import axios from "axios";

export const Profile = () => {
	const userID = localStorage.getItem("user_id");
	const [userEmail, setUserEmail] = useState();
	const [orderArray, setOrderArray] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [userEmailFetch, orderArrayFetch] = await Promise.all([
					axios.get(`http://localhost:3000/users/${userID}`),
					axios.get(`http://localhost:3000/orders`),
				]);

				setUserEmail(userEmailFetch.data.email);
				setOrderArray(orderArrayFetch.data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};
		fetchData();
	}, []);

	let filteredOrders = [];
	if (!loading) {
		filteredOrders = orderArray.filter((order) => {
			return order.email === userEmail;
		});
	}

	return (
		<div>
			{loading ? (
				<div>Loading</div>
			) : (
				filteredOrders.map((order) => {
					return <div key={order.orderNumber}>{order.id}</div>;
				})
			)}
		</div>
	);
};
