import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "../styles/App.scss";

export default function App() {
	return (
		<Router>
			<div>
				<Header />
				<Body />
				<Footer />
			</div>
		</Router>
	);
}
