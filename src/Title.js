import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Title = () => {
	const location = useLocation();

	useEffect(() => {
		switch (true) {
			case location.pathname === "/":
				document.title = "Affaldsguiden - Forside";
				break;
			case location.pathname.startsWith("/sorting"):
				document.title = "Affaldsguiden - Sortering";
				break;
			case location.pathname.startsWith("/recycling"):
				document.title = "Affaldsguiden - Genbrugsstationer";
				break;
			case location.pathname === "/purchase":
				document.title = "Hotel Overlook - Bestil Holder";
				break;
			case location.pathname === "/login":
				document.title = "Hotel Overlook - Log ind";
				break;
			case location.pathname === "/profile":
				document.title = "Hotel Overlook - Profil";
				break;
			default:
				document.title = "Affaldsguiden";
		}
	}, [location.pathname]);

	return null;
};
