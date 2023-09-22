import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sorting } from "./pages/Sorting";
import { SectionDetail } from "./components/Sorting/SectionDetail";
import { Recycling } from "./pages/Recycling";
import { NotFound } from "./pages/404";
import { RecyclingDetails } from "./components/Recycling/RecyclingDetails";
import { Login } from "./pages/Login";
import { Purchase } from "./pages/Purchase";
import { Profile } from "./pages/Profile";

//Using react router to map out the routes for the site
export const AppRouter = () => {
	return (
		<Routes>
			{/* the 'index' part means that this is the default route */}
			<Route index element={<Home />} />
			{/* Here the route is configured so when you access the /sorting path, it'll render the sorting component */}
			<Route path="/sorting" element={<Sorting />} />
			<Route path="/sorting/:section_id" element={<SectionDetail />} />
			<Route path="/recycling/" element={<Recycling />} />
			<Route path="/recycling/:org_id" element={<RecyclingDetails />} />
			<Route path="/purchase/" element={<Purchase />} />
			<Route path="/login/" element={<Login />} />
			<Route path="/profile/" element={<Profile />} />
			{/* If no route is matched, it'll display a 404 site, also known as a catch-all route */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
