// Nav.jsx
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Nav = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-brightBlue p-6 flex items-center justify-between">
			<div className="flex items-center">
				<span className="text-accentYellow font-semibold text-xl">Mel Avina-Beltran</span>
			</div>
			<div className="hidden lg:flex lg:space-x-6 lowercase font-bold">
				<Link
					to="./img/6 Mel Avina-Beltran Resume.pdf"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className="text-white hover:text-accentOrange cursor-pointer"
				>
					Download Resume
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
