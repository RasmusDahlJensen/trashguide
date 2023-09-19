import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

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

const GoogleMaps = () => {
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
