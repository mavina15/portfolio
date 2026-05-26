import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
	const [open, setOpen] = useState(false);

	return (
		/* Matched to Navy background with glassmorphism and subtle border */
		<nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/80 backdrop-blur-md border-b border-white/10 px-4 py-3 transition-all duration-300">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				{/* Brand Area - "Portfolio" text deleted */}
				<div className="flex items-center">
					<ScrollLink
						to="home"
						smooth={true}
						duration={500}
						className="text-white font-bold text-xl cursor-pointer tracking-tight hover:text-accentOrange transition-colors"
						aria-label="Scroll to top"
					>
						Mel Avina‑Beltran
					</ScrollLink>
				</div>

				{/* Desktop Menu Items */}
				<div className="hidden md:flex items-center space-x-8">
					<ScrollLink
						to="projects"
						smooth={true}
						className="text-sm font-medium text-slate-300 hover:text-white cursor-pointer transition-colors"
					>
						Projects
					</ScrollLink>

					<div className="flex items-center space-x-4">
						<a
							href="/resume-data-engineer.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-accentOrange hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-lg transition-all active:scale-95"
							aria-label="Open resume PDF"
						>
							Resume
						</a>

						<a
							href="mailto:melavinabeltran@gmail.com"
							className="text-white border border-white/20 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-white/10 hover:border-white/40 transition-all"
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
						className="p-2 rounded-lg text-slate-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accentOrange/50"
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
				<div className="md:hidden absolute top-full left-0 right-0 bg-[#0a192f] border-b border-white/10 shadow-2xl animate-in slide-in-from-top duration-200">
					<div className="flex flex-col p-6 space-y-4">
						<ScrollLink
							to="projects"
							smooth={true}
							duration={500}
							onClick={() => setOpen(false)}
							className="text-slate-300 font-medium text-lg border-b border-white/5 pb-2"
						>
							Projects
						</ScrollLink>

						<a
							href="/resume-data-engineer.pdf"
							target="_blank"
							className="text-accentOrange font-bold text-lg"
							onClick={() => setOpen(false)}
						>
							Resume (PDF)
						</a>

						<a
							href="mailto:melavinabeltran@gmail.com"
							className="bg-white text-[#0a192f] text-center font-bold py-3 rounded-xl shadow-lg"
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