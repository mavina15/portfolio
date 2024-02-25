// Nav.jsx
import { Link as ScrollLink } from "react-scroll";
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
	return (
		<nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-evenly mx-auto p-4">
				<ul className="text-l lowercase flex">
					<NavItem to="" text="Home" />
					<NavItem to="./About" text="About" />
					<NavItem to="./Education" text="Education" />
					<NavItem to="./Projects" text="Projects" />
					<NavItem to="./Experience" text="Experience" />
					<NavItem to="./Leadership" text="Leadership" />
				</ul>
			</div>
		</nav>
	);
}

const NavItem = ({ to, text, hashLink }) => {
	return (
		<div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
			<ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
				<li className="ml-4 font-bold">
					<ScrollLink to={to} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 md:p-0">{text}</ScrollLink>
					{hashLink && <RouterHashLink smooth to={hashLink}>{text}</RouterHashLink>}
				</li>
			</ul>
		</div>
	);
}

export default Nav;
