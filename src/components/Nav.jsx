import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-brightBlue/95 backdrop-blur-sm px-4 py-3">
			<div className="max-w-6xl mx-auto flex items-center justify-between">
				{/* Brand */}
				<div className="flex items-center space-x-4">
					<ScrollLink
						to="home"
						smooth={true}
						duration={500}
						className="text-white font-semibold text-lg cursor-pointer"
						aria-label="Scroll to top / home"
					>
						Mel Avina‑Beltran
					</ScrollLink>
					<span className="hidden sm:inline-block text-sm text-white/80">Data Engineer • Analytics</span>
				</div>

				{/* Desktop actions */}
				<div className="hidden md:flex items-center space-x-3">
					<a
						href="/resume-data-engineer.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white bg-orange-600 hover:bg-orange-500 px-3 py-1.5 rounded-md text-sm font-medium shadow-sm"
						aria-label="Open resume PDF"
					>
						Resume
					</a>

					<a
						href="mailto:melavinabeltran@gmail.com"
						className="text-white border border-white/20 px-3 py-1.5 rounded-md text-sm hover:bg-white/5"
						aria-label="Email Mel"
					>
						Contact
					</a>
				</div>

				{/* Mobile menu button */}
				<div className="md:hidden">
					<button
						onClick={() => setOpen(!open)}
						aria-expanded={open}
						aria-label="Toggle menu"
						className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{open ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile panel */}
			{open && (
				<div className="md:hidden mt-2 px-2 pb-3">
					<ScrollLink
						to="projects"
						smooth={true}
						duration={500}
						onClick={() => setOpen(false)}
						className="block px-3 py-2 rounded-md text-white hover:bg-white/5 text-sm"
						role="link"
					>
						Projects
					</ScrollLink>

					<ScrollLink
						to="about"
						smooth={true}
						duration={500}
						onClick={() => setOpen(false)}
						className="block px-3 py-2 rounded-md text-white hover:bg-white/5 text-sm"
						role="link"
					>
						About
					</ScrollLink>

					<a
						href="/resume-data-engineer.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="block px-3 py-2 rounded-md text-white hover:bg-white/5 text-sm"
						aria-label="Open resume PDF"
						onClick={() => setOpen(false)}
					>
						Resume
					</a>

					<a
						href="mailto:melavinabeltran@gmail.com"
						className="block px-3 py-2 rounded-md text-white hover:bg-white/5 text-sm"
						aria-label="Email Mel"
						onClick={() => setOpen(false)}
					>
						Contact
					</a>
				</div>
			)}
		</nav>
	);
};

export default Nav;



