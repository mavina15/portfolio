import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import profilePic from "./img/profile-pic.png";
import mailIcon from "./img/mail-app.png";
import githubIcon from "./img/github-app.png";
import linkedinIcon from "./img/linkedin-app.png";
import bannerPic from "./img/ordinary-differential-equations.png";

const ParallaxSection = () => {
	return (
		/* Deep Navy Blue Background */
		<div className="min-h-screen bg-slate-900 text-gray-100 pt-24 pb-12 transition-colors duration-300">
			<Nav />

			<main className="max-w-6xl mx-auto px-4">
				{/* 35% Left / 65% Right structural grid split on desktop */}
				<div className="grid grid-cols-1 md:grid-cols-[35%_63%] gap-[2%] items-start">

					{/* LEFT SIDE: Profile card (Takes up 35%) */}
					<aside className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 flex flex-col shadow-xl">
						<div className="relative">
							<div
								className="w-full rounded-lg bg-cover bg-center opacity-90"
								style={{ backgroundImage: `url(${bannerPic})`, height: 120 }}
								role="img"
								aria-label="Mathematical illustration banner"
							/>
							<div
								className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-slate-800 border-4 border-slate-800 overflow-hidden shadow-md"
								style={{ top: 90 }}
							>
								<img src={profilePic} alt="Mel Avina-Beltran" className="w-full h-full object-cover" />
							</div>
						</div>

						<div className="mt-16 text-center">
							<h1 className="text-2xl font-bold text-white tracking-tight">Mel Avina‑Beltran</h1>
							<p className="text-sm font-semibold text-orange-400 mt-1 uppercase tracking-wider">Data Engineer • Analytics Engineer</p>
							<p className="text-sm text-slate-300 mt-3 max-w-xs mx-auto leading-relaxed">
								I build production ETL, schema tests, and monitored analytics that double stakeholder visibility and cut triage time by 65%.
							</p>
						</div>

						<div className="mt-5 flex items-center justify-center gap-3 w-full">
							<a href="/resume-data-engineer.pdf" className="flex-1 text-center font-bold text-sm bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg shadow-md transition-all active:scale-95" aria-label="Open resume PDF">
								Resume
							</a>
							<a href="mailto:melavinabeltran@gmail.com" className="flex-1 text-center font-semibold text-sm border border-slate-600 text-slate-200 py-2 px-4 rounded-lg hover:bg-slate-700/50 hover:border-slate-500 transition-all" aria-label="Email Mel">
								Contact
							</a>
						</div>

						<div className="mt-4 flex items-center justify-center gap-5 border-b border-slate-700/50 pb-5">
							<a href="mailto:melavinabeltran@gmail.com" aria-label="Email" className="hover:opacity-80 transition-opacity invert brightness-200">
								<img src={mailIcon} alt="email" className="w-6 h-6" />
							</a>
							<a href="https://github.com/mavina15" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-80 transition-opacity invert brightness-200">
								<img src={githubIcon} alt="github" className="w-6 h-6" />
							</a>
							<a href="https://linkedin.com/in/mavinabeltran" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity invert brightness-200">
								<img src={linkedinIcon} alt="linkedin" className="w-6 h-6" />
							</a>
						</div>

						<div className="mt-5">
							<h2 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-3">About</h2>
							<ul className="space-y-3.5">
								<AboutItem icon="🎓" primary="B.S. Applied Mathematics, UC Davis (Dec 2023)" />
								<AboutItem icon="🛠️" primary="Primary:" detail="Python, SQL, PySpark — ETL, schema tests, monitoring" />
								<AboutItem icon="📈" primary="Impact:" detail="Doubled stakeholder visibility; reduced triage time 65%" />
							</ul>
						</div>
					</aside>

					{/* RIGHT SIDE: Projects column (Takes up 65%) */}
					<section className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex flex-col shadow-xl">
						<h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-slate-700/50">Projects</h2>

						<div className="space-y-5">
							<ProjectItem
								title="WNBA Matrix"
								impact="70.4% holdout accuracy · inference <200ms"
								teaser="End-to-end model pipeline and Flask API with monitoring and usage instrumentation."
								tech={["Python", "scikit-learn", "Flask", "Docker"]}
								repoLink="https://github.com/mavina15/wnba-predictive-app"
								demoLink="https://wnbaflask-595f54052c18.herokuapp.com/"
								readMoreLink="/projects/wnba-matrix"
							/>

							<ProjectItem
								title="Breast Cancer Classification"
								impact="~95% test accuracy · reproducible pipeline"
								teaser="Classifier comparison with cross-validation; model card and reproducible training scripts."
								tech={["Python", "scikit-learn", "pandas"]}
								repoLink="https://github.com/mavina15/breast-cancer-classification"
								demoLink="#"
								readMoreLink="/projects/breast-cancer-classification"
							/>
						</div>

						<div className="mt-8 pt-4 border-t border-slate-700/50 text-xs text-slate-400 text-center md:text-left">
							B.S., Applied Mathematics — UC Davis (Dec 2023) • Based in Bay Area, open to remote
						</div>
					</section>
				</div>
			</main>
		</div>
	);
};

/* Internal Reusable Subcomponents mapped to Dark Navy Theme */

const AboutItem = ({ icon, primary, detail }) => (
	<li className="flex items-start gap-3">
		<span className="text-base leading-none mt-0.5">{icon}</span>
		<div className="leading-tight">
			{detail ? (
				<p className="text-sm text-slate-300">
					<span className="font-semibold text-white">{primary}</span>{" "}
					<span className="text-slate-400">{detail}</span>
				</p>
			) : (
				<p className="text-sm font-semibold text-white">{primary}</p>
			)}
		</div>
	</li>
);

const ProjectItem = ({ title, impact, teaser, tech = [], repoLink, demoLink, readMoreLink }) => (
	<article className="p-5 rounded-lg border border-slate-700/40 bg-slate-900/40 hover:bg-slate-900/70 transition-all duration-200">
		<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
			<div className="md:flex-1">
				<h3 className="text-lg font-bold text-white">{title}</h3>
				<p className="text-xs font-bold text-orange-400 mt-0.5 uppercase tracking-wider">{impact}</p>
				<p className="text-sm text-slate-300 mt-2 leading-relaxed">{teaser}</p>
				<div className="mt-3 flex flex-wrap gap-1.5">
					{tech.map(t => (
						<span key={t} className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-2.5 py-0.5 rounded-md font-medium">{t}</span>
					))}
				</div>
			</div>

			<div className="flex md:flex-col items-center md:items-stretch gap-2 shrink-0 self-start w-full md:w-auto">
				{repoLink && (
					<a
						href={repoLink}
						target="_blank"
						rel="noopener noreferrer"
						className="text-center text-sm py-1.5 px-3 border border-slate-600 rounded-md text-slate-200 hover:bg-slate-700/60 transition-colors w-full"
						aria-label={`Open repo for ${title}`}
					>
						Repo
					</a>
				)}
				{demoLink && demoLink !== "#" && (
					<a
						href={demoLink}
						target="_blank"
						rel="noopener noreferrer"
						className="text-center text-sm py-1.5 px-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-semibold shadow-sm transition-colors w-full"
						aria-label={`Open demo for ${title}`}
					>
						Live Demo
					</a>
				)}
				{readMoreLink && (
					<Link to={readMoreLink} className="text-sm text-blue-400 hover:text-blue-300 font-medium mt-1 text-center md:text-left w-full block transition-colors" aria-label={`Read case study for ${title}`}>
						Case Study →
					</Link>
				)}
			</div>
		</div>
	</article>
);

export default ParallaxSection;