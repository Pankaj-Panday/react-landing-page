import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

export default function App() {
	return (
		<>
			<Header />
			<Home />
			<Body />
			<Footer />
		</>
	);
}
