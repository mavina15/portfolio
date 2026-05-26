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
		/* Dark Navy Page Background */
		<div className="min-h-screen bg-[#0a192f] pt-24 pb-12 transition-colors duration-300">
			<Nav />

			<main className="max-w-6xl mx-auto px-4">
				{/* Precise 35% / 65% split via arbitrary grid values */}
				<div className="grid grid-cols-1 md:grid-cols-[35%_63%] gap-[2%] items-start">

					{/* LEFT: Profile Card (White) */}
					<aside className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col shadow-2xl">
						<div className="relative">
							<div
								className="w-full rounded-xl bg-cover bg-center"
								style={{ backgroundImage: `url(${bannerPic})`, height: 120 }}
								role="img"
								aria-label="Mathematical illustration banner"
							/>
							<div
								className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-white border-4 border-white overflow-hidden shadow-sm"
								style={{ top: 90 }}
							>
								<img src={profilePic} alt="Mel Avina-Beltran" className="w-full h-full object-cover" />
							</div>
						</div>

						<div className="mt-16 text-center">
							<h1 className="text-2xl font-bold text-gray-900">Mel Avina‑Beltran</h1>
							<p className="text-base font-semibold text-accentOrange mt-1">Data Engineer • Analytics Engineer</p>
							<p className="text-sm text-gray-600 mt-3 max-w-xs mx-auto leading-relaxed">
								I build production ETL, schema tests, and monitored analytics that double stakeholder visibility and cut triage time by 65%.
							</p>
						</div>

						<div className="mt-5 flex items-center justify-center gap-3">
							<a href="/resume-data-engineer.pdf" className="btn-primary flex-1 text-center py-2.5" aria-label="Open resume PDF">Resume</a>
							<a href="mailto:melavinabeltran@gmail.com" className="btn-ghost flex-1 text-center py-2.5 border-gray-300" aria-label="Email Mel">Contact</a>
						</div>

						<div className="mt-4 flex items-center justify-center gap-5 border-b border-gray-100 pb-5">
							<a href="mailto:melavinabeltran@gmail.com" aria-label="Email" className="hover:opacity-70 transition-opacity">
								<img src={mailIcon} alt="email" className="w-6 h-6" />
							</a>
							<a href="https://github.com/mavina15" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-70 transition-opacity">
								<img src={githubIcon} alt="github" className="w-6 h-6" />
							</a>
							<a href="https://linkedin.com/in/mavinabeltran" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
								<img src={linkedinIcon} alt="linkedin" className="w-6 h-6" />
							</a>
						</div>

						<div className="mt-5">
							<h2 className="text-xs font-bold uppercase tracking-widest text-accentOrange mb-3">About</h2>
							<ul className="space-y-3">
								<AboutItem icon="🎓" primary="B.S. Applied Mathematics, UC Davis (Dec 2023)" />
								<AboutItem icon="🛠️" primary="Primary:" detail="Python, SQL, PySpark" />
								<AboutItem icon="📈" primary="Impact:" detail="Reduced triage time by 65%" />
							</ul>
						</div>
					</aside>

					{/* RIGHT: Projects Section (White) */}
					<section className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col shadow-2xl">
						<h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-100">Featured Projects</h2>

						<div className="space-y-6">
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

						<div className="mt-10 pt-4 border-t border-gray-100 text-xs text-gray-400 text-center md:text-left">
							B.S., Applied Mathematics — UC Davis (Dec 2023) • Based in Bay Area
						</div>
					</section>
				</div>
			</main>
		</div>
	);
};

/* Components maintained with White Theme logic */

const AboutItem = ({ icon, primary, detail }) => (
	<li className="flex items-start gap-3">
		<span className="text-base mt-0.5">{icon}</span>
		<div className="leading-tight text-sm text-gray-700">
			<span className="font-semibold text-gray-900">{primary}</span>{" "}
			<span className="text-gray-500">{detail}</span>
		</div>
	</li>
);

const ProjectItem = ({ title, impact, teaser, tech = [], repoLink, demoLink, readMoreLink }) => (
	<article className="p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-all duration-200">
		<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
			<div className="md:flex-1">
				<h3 className="text-xl font-bold text-gray-900">{title}</h3>
				<p className="text-xs font-bold text-accentOrange mt-0.5 uppercase tracking-wider">{impact}</p>
				<p className="text-sm text-gray-600 mt-2 leading-relaxed">{teaser}</p>
				<div className="mt-3 flex flex-wrap gap-2">
					{tech.map(t => (
						<span key={t} className="bg-white border border-gray-200 text-gray-600 text-xs px-2.5 py-1 rounded-md font-medium">{t}</span>
					))}
				</div>
			</div>

			<div className="flex md:flex-col items-center gap-2 shrink-0 w-full md:w-32">
				{repoLink && (
					<a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-center text-sm py-2 px-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-white w-full transition-colors">
						Repo
					</a>
				)}
				{demoLink && demoLink !== "#" && (
					<a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-center text-sm py-2 px-3 bg-gray-900 text-white rounded-lg font-semibold w-full shadow-sm hover:bg-black transition-colors">
						Demo
					</a>
				)}
			</div>
		</div>
	</article>
);

export default ParallaxSection;