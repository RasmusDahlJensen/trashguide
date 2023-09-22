import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	CardContainer,
	CardTitle,
	ContainerType,
	OrderCard,
	OrderContainer,
	UserContainer,
} from "./profileStyle";
import {
	ContainerName,
	ContainerPicture,
} from "../components/ProfileContainer";
import { LogoutButton } from "../components/Logout";
import trash from "../assets/trashCan.svg";

export const Profile = () => {
	const userID = localStorage.getItem("user_id");
	const [userData, setUserData] = useState();
	const [orderArray, setOrderArray] = useState([]);
	const [loading, setLoading] = useState(true);
	const [orderDetails, setOrderDetails] = useState([]);

	// Create a promise array to fetch all user data and all site orders
	useEffect(() => {
		const fetchData = async () => {
			try {
				const [userEmailFetch, orderArrayFetch] = await Promise.all([
					// User data
					axios.get(`http://localhost:3000/users/${userID}`),
					// List of all orders
					axios.get(`http://localhost:3000/orders`),
				]);

				// Fill the states with the response data
				setUserData(userEmailFetch.data);
				setOrderArray(orderArrayFetch.data);
				// Allow items to be rendered
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};
		fetchData();
	}, [userID]);
	
	// Create a an array for all filtered orders
	let filteredOrders = [];
	if (!loading) {
		// Filter over the entire order list and populate the array when
		// there's a match between order email and user email
		filteredOrders = orderArray.filter((order) => {
			return order.email === userData.email;
		});
	}
	// Create an array of promises
	useEffect(() => {
		// We use the filterered array of orders with shallow data to fetch the detailed data
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
				// Once the array of promises has concluded populate this state with the data
				setOrderDetails(details);
			} catch (error) {
				console.error(error);
			}
		};
		//if there's orders in the filtered list and the list haven't yet been fetched
		//then we should call the function to populate the orderDetails state
		if (filteredOrders.length > 0 && orderDetails.length === 0) {
			fetchOrderDetails();
		}
		//If any of these dependencies in the dependency array changes we call the useEffect again
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

	//Function for deleting orders that takes an order ID as a parameter
	const deleteOrder = (id) => {
		// console.log("Review ID", id);

		//If there's no accesstoken then return
		const accessToken = localStorage.getItem("access_token");
		if (!accessToken) {
			console.error("Access token not found in localStorage");
			return;
		}
		///Otherwise we try and delete the item based on its ID, sending a bearer token in the header
		try {
			axios
				.delete(`http://localhost:3000/orders/${id}`, {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				})
				//if we get status 200 back we refresh the page to show the new state
				.then((response) => {
					console.log(response);
					if (response.status === 200) {
						//Rerender to update component
						window.location.reload(true);
					}
				})
				.catch((error) => {
					console.error("Error deleting order:", error);
				});
		} catch (error) {
			console.error("Error sending delete request:", error);
		}
	};

	return (
		<OrderContainer>
			<CardContainer>
				{loading ? (
					<div>Loading</div>
				) : orderDetails.length === 0 ? (
					<div>Du har ingen bestillinger</div>
				) : (
					orderDetails.map((order) => {
						return (
							<OrderCard key={order.id}>
								<CardTitle>
									<p>Ordre nummer {order.id}</p>
									<img
										src={trash}
										alt="delete"
										onClick={() => deleteOrder(order.id)}
									/>
								</CardTitle>
								<p>Bestilt på dato: </p>
								<p>{formatDate(order.createdAt)}</p>
								<ContainerType>
									<p>Container type:</p>
									<p>
										<ContainerName orderId={order.container_id} />
									</p>
									<ContainerPicture orderId={order.container_id} />
								</ContainerType>
							</OrderCard>
						);
					})
				)}
			</CardContainer>

			<div>
				{loading ? (
					<div>Loading</div>
				) : (
					userData && (
						<UserContainer>
							<LogoutButton />
							<p>
								Hej {userData.firstname} {userData.lastname}, her kan du se dine
								bestillinger
							</p>
							<p>som der er blevet lavet på følgende mail: {userData.email}</p>
						</UserContainer>
					)
				)}
			</div>
		</OrderContainer>
	);
};
