import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./hooks/AuthContext";
import { AppRouter } from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Title } from "./Title";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyles } from "./style/globalStyle";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
