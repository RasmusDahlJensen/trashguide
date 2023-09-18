import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sorting } from "./pages/Sorting";
import { SectionDetail } from "./components/SectionDetail";

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/sorting" element={<Sorting />} />
			<Route path="/sorting/:section_id" element={<SectionDetail />} />
		</Routes>
	);
};
