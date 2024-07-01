import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import WNBACaseStudy from './components/WNBAMatrix'; // Import your case study component
import ParallaxSection from './components/ParallaxSection'; // Example of another section/component

const App = () => {
	return (
		<div>
			<Router>
				<Nav />
				<Routes>
					<Route path="/wnba-case-study" element={<WNBACaseStudy />} />
					<Route path="/" element={<ParallaxSection />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;



