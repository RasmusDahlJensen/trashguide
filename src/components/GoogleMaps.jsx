import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

const GoogleMaps = (orgId) => {
	const [orgDetails, setOrgDetails] = useState({});
	useEffect(() => {
		console.log(orgId);
		// Fetch organization details using orgId
		axios
			.get(`http://localhost:3000/orgs/${orgId}`)
			.then((response) => {
				const orgData = response.data;
				setOrgDetails(orgData);
				console.log(orgData);
			})
			.catch((error) => {
				console.error("Error fetching organization details: ", error);
			});
	}, [orgId]);

	const libraries = ["places"];
	const mapContainerStyle = {
		width: "200px",
		height: "200px",
	};
	const center = {
		lat: 7.2905715,
		lng: 80.6337262,
	};

	const mapOptions = {
		disableDefaultUI: true,
	};
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries,
	});

	if (loadError) {
		return <div>Error loading maps</div>;
	}

	if (!isLoaded) {
		return <div>Loading maps</div>;
	}

	return (
		<div>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={10}
				center={center}
				options={mapOptions}
			>
				<Marker position={center} />
			</GoogleMap>
		</div>
	);
};

export default GoogleMaps;
