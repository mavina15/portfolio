import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 py-3 transition-all duration-300">
			<div className="max-w-5xl mx-auto flex items-center justify-between">
				{/* Brand / Logo Area */}
				<div className="flex items-center space-x-3">
					<ScrollLink
						to="home"
						smooth={true}
						duration={500}
						className="text-gray-900 font-bold text-xl cursor-pointer tracking-tight"
						aria-label="Scroll to top"
					>
						Mel Avina‑Beltran
					</ScrollLink>
					<div className="hidden sm:block h-4 w-[1px] bg-gray-300"></div>
					<span className="hidden sm:inline-block text-xs font-medium text-gray-500 uppercase tracking-widest">
						Portfolio
					</span>
				</div>

				{/* Desktop Menu Items */}
				<div className="hidden md:flex items-center space-x-6">
					<ScrollLink
						to="projects"
						smooth={true}
						className="text-sm font-medium text-gray-600 hover:text-accentOrange cursor-pointer transition-colors"
					>
						Projects
					</ScrollLink>

					<div className="flex items-center space-x-3 ml-4">
						<a
							href="/resume-data-engineer.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-accentOrange hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-all active:scale-95"
							aria-label="Open resume PDF"
						>
							Resume
						</a>

						<a
							href="mailto:melavinabeltran@gmail.com"
							className="text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all"
							aria-label="Email Mel"
						>
							Contact
						</a>
					</div>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button
						onClick={() => setOpen(!open)}
						aria-expanded={open}
						aria-label="Toggle menu"
						className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accentOrange/20"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{open ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Dropdown Panel */}
			{open && (
				<div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl animate-in slide-in-from-top duration-200">
					<div className="flex flex-col p-4 space-y-3">
						<ScrollLink
							to="projects"
							smooth={true}
							duration={500}
							onClick={() => setOpen(false)}
							className="text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-gray-50"
						>
							Projects
						</ScrollLink>

						<a
							href="/resume-data-engineer.pdf"
							target="_blank"
							className="text-accentOrange font-bold px-4 py-2 rounded-md hover:bg-orange-50"
							onClick={() => setOpen(false)}
						>
							Resume (PDF)
						</a>

						<a
							href="mailto:melavinabeltran@gmail.com"
							className="bg-gray-900 text-white text-center font-bold px-4 py-3 rounded-xl shadow-lg"
							onClick={() => setOpen(false)}
						>
							Contact Me
						</a>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Nav;