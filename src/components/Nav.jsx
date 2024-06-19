// Nav.jsx
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Nav = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-pink-500 p-6 flex items-center justify-between">
			<div className="flex items-center">
				<span className="text-white font-semibold text-xl">Mel Avina-Beltran</span>
			</div>
			<div className="hidden lg:flex lg:space-x-6 lowercase font-bold">
				<Link
					to="home"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className="text-white hover:text-gray-200 cursor-pointer"
				>
					Home
				</Link>
				<Link
					to="about"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className="text-white hover:text-gray-200 cursor-pointer"
				>
					About
				</Link>
				<Link
					to="projects"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className="text-white hover:text-gray-200 cursor-pointer"
				>
					Projects
				</Link>
			</div>
		</nav>
	);
};

export default Nav;


