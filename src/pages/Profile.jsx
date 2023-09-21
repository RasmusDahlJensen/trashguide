import React, { useState, useEffect } from "react";
import axios from "axios";

export const Profile = () => {
	const userID = localStorage.getItem("user_id");
	const [userData, setUserData] = useState();
	const [orderArray, setOrderArray] = useState([]);
	const [loading, setLoading] = useState(true);
	const [orderDetails, setOrderDetails] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [userEmailFetch, orderArrayFetch] = await Promise.all([
					axios.get(`http://localhost:3000/users/${userID}`),
					axios.get(`http://localhost:3000/orders`),
				]);

				setUserData(userEmailFetch.data);
				setOrderArray(orderArrayFetch.data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};
		fetchData();
	}, [userID]);

	let filteredOrders = [];
	if (!loading) {
		filteredOrders = orderArray.filter((order) => {
			return order.email === userData.email;
		});
	}

	useEffect(() => {
		const fetchOrderDetails = async () => {
			try {
				const details = await Promise.all(
					filteredOrders.map(async (order) => {
						const response = await axios.get(
							`http://localhost:3000/orders/${order.id}`
						);
						return response.data;
					})
				);

				setOrderDetails(details);
			} catch (error) {
				console.error(error);
			}
		};

		if (filteredOrders.length > 0 && orderDetails.length === 0) {
			fetchOrderDetails();
		}
	}, [filteredOrders, orderDetails]);

	return (
		<main>
			{loading ? (
				<div>Loading</div>
			) : (
				orderDetails.map((order) => {
					return (
						<div key={order.id}>
							<p>{order.fullname}</p>
							<p>
								{order.address} {order.zipcode}
								{order.city}
							</p>
							<p>{order.container_id}</p>
							<p>{order.phone}</p>
						</div>
					);
				})
			)}
		</main>
	);
};
