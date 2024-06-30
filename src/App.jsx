import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from "./components/Nav.jsx";
import ParallaxSection from "./components/ParallaxSection.jsx";

const App = () => {
	return (
		<div>
			<Router>
				<Nav />
				<ParallaxSection />
			</Router>
		</div>
	);
};

export default App;

