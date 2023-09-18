import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

export const AppRouter = () => {
	return (
		<Routes>
			{/* Homepage */}
			{/* <Route index element={<Home />} /> */}
			{/* Nested Route */}
			{/* <Route path="/example" element={<Example />} /> */}
			{/* <Route path="/example/:example_id" element={<ExampleDetails />} /> */}
			{/* Regular route */}
			{/* <Route path="/pageTwo" element={<pageTwo />} /> */}
			<Route index element={<Home />} />
		</Routes>
	);
};
