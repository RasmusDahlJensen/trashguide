import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexts/AuthContext";
import { AppRouter } from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Title } from "./Title";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyles } from "./style/globalStyle";
import { Header } from "./components/PageLayout/Header";
import { Footer } from "./components/PageLayout/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthProvider>
			<BrowserRouter>
				<Title />
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<Header />
					<AppRouter />
					<Footer />
				</ThemeProvider>
			</BrowserRouter>
		</AuthProvider>
	</React.StrictMode>
);
