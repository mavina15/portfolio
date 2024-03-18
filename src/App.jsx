import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Leadership from "./components/Leadership.jsx";
import Bike from "./components/BikeData.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
	return (
		<div>
			<Router>
				<Nav />
				<Routes>
					<Route exact path='/' element={<About />} />
					<Route exact path='/education' element={<Education />} />
					<Route exact path='/projects' element={<Projects />} />
					<Route exact path='/experience' element={<Experience />} />
					<Route exact path='/leadership' element={<Leadership />} />
					<Route exact path='/bike' element={<Bike />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
};

export default App;

