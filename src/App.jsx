import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from "./components/Nav";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Footer from "./components/Footer";

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
				</Routes>
				<Footer />
			</Router>
		</div>
	);
};

export default App;

