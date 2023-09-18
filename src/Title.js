import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Title = () => {
	const location = useLocation();

	useEffect(() => {
		switch (
			true
			// case location.pathname === "/":
			// 	document.title = "Hotel Overlook - Forside";
			// 	break;
			// case location.pathname.startsWith("/destinations"):
			// 	document.title = "Hotel Overlook - Hoteller";
			// 	break;
			// case location.pathname === "/reservations":
			// 	document.title = "Hotel Overlook - Reservationer";
			// 	break;
			// case location.pathname === "/login":
			// 	document.title = "Hotel Overlook - Login";
			// 	break;
			// case location.pathname === "/rooms":
			// 	document.title = "Hotel Overlook - Værelser";
			// 	break;
			// default:
			// 	document.title = "Overlook";
		) {
		}
	}, [location.pathname]);

	return null;
};
