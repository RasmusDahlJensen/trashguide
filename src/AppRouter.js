import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sorting } from "./pages/Sorting";
import { SectionDetail } from "./components/SectionDetail";
import { Recycling } from "./pages/Recycling";
import { NotFound } from "./pages/404";

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/sorting" element={<Sorting />} />
			<Route path="/sorting/:section_id" element={<SectionDetail />} />
			<Route path="/recycling/" element={<Recycling />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
