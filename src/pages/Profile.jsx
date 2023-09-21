import React, { useState, useEffect } from "react";
import axios from "axios";
import { OrderCard, OrderContainer } from "./profileStyle";
import {
	ContainerName,
	ContainerPicture,
} from "../components/ProfileContainer";

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

	//format the isoDate to danish time
	const formatDate = (isoDate) => {
		const date = new Date(isoDate);
		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		};
		const dateFormat = new Intl.DateTimeFormat("da-DK", options);
		return dateFormat.format(date);
	};

	return (
		<OrderContainer>
			{loading ? (
				<div>Loading</div>
			) : (
				orderDetails.map((order) => {
					return (
						<OrderCard key={order.id}>
							<p>Ordre nummer {order.id}</p>
							<p>{order.fullname}</p>
							<p>
								{order.address} {order.zipcode}
								{order.city}
							</p>
							<p>
								<ContainerName orderId={order.container_id} />
							</p>
							<ContainerPicture orderId={order.container_id} />
							<p>{order.phone}</p>
							<p>{formatDate(order.createdAt)}</p>
						</OrderCard>
					);
				})
			)}
		</OrderContainer>
	);
};
