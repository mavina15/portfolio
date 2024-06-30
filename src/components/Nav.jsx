import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-brightBlue p-6 flex items-center justify-between">
			<div className="flex items-center">
				<span className="text-white font-semibold text-xl">Mel Avina-Beltran</span>
			</div>
			<div className="hidden lg:flex lg:space-x-6 lowercase font-bold">
				<a
					href="./img/6 Mel Avina-Beltran Resume.pdf"
					download="Mel Avina-Beltran Resume.pdf"
					className="text-white bg-orange-600 hover:bg-orange-500 py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
				>
					Download Resume
				</a>
			</div>
		</nav>
	);
};

export default Nav;

