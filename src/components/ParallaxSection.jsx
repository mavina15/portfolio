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

			{/* Increased max-width from 6xl to 7xl for a wider layout */}
			<main className="max-w-7xl mx-auto px-6">

				{/* 35% / 65% split maintained on the wider canvas */}
				<div className="grid grid-cols-1 lg:grid-cols-[35%_63%] gap-[2%] items-start">

					{/* LEFT: Profile Card (White) */}
					<aside className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col shadow-2xl">
						<div className="relative">
							<div
								className="w-full rounded-xl bg-cover bg-center"
								style={{ backgroundImage: `url(${bannerPic})`, height: 140 }}
								role="img"
								aria-label="Mathematical illustration banner"
							/>
							<div
								className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white border-4 border-white overflow-hidden shadow-sm"
								style={{ top: 105 }}
							>
								<img src={profilePic} alt="Mel Avina-Beltran" className="w-full h-full object-cover" />
							</div>
						</div>

						<div className="mt-20 text-center">
							<h1 className="text-3xl font-bold text-gray-900 tracking-tight">Mel Avina‑Beltran</h1>
							<p className="text-lg font-semibold text-accentOrange mt-1">Data Engineer • Analytics Engineer</p>
							<p className="text-sm text-gray-600 mt-4 max-w-sm mx-auto leading-relaxed">
								I build production ETL, schema tests, and monitored analytics that double stakeholder visibility and cut triage time by 65%.
							</p>
						</div>

						<div className="mt-6 flex items-center justify-center gap-6 border-b border-gray-100 pb-6">
							<a href="mailto:melavinabeltran@gmail.com" className="hover:scale-110 transition-transform">
								<img src={mailIcon} alt="email" className="w-7 h-7" />
							</a>
							<a href="https://github.com/mavina15" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
								<img src={githubIcon} alt="github" className="w-7 h-7" />
							</a>
							<a href="https://linkedin.com/in/mavinabeltran" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
								<img src={linkedinIcon} alt="linkedin" className="w-7 h-7" />
							</a>
						</div>

						<div className="mt-6">
							<h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accentOrange mb-4">Background</h2>
							<ul className="space-y-4">
								<AboutItem icon="🎓" primary="UC Davis, Dec 2023" detail="B.S. Applied Mathematics" />
								<AboutItem icon="🛠️" primary="Stack:" detail="Python, SQL, PySpark, Airflow" />
								<AboutItem icon="📈" primary="KPIs:" detail="65% reduction in triage time" />
							</ul>
						</div>
					</aside>

					{/* RIGHT: Projects Section (White) */}
					<section className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-2xl">
						<div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
							<h2 className="text-2xl font-bold text-gray-900">Engineering Projects</h2>
							<span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Selected Works</span>
						</div>

						<div className="space-y-6">
							<ProjectItem
								title="WNBA Matrix"
								impact="70.4% holdout accuracy · inference <200ms"
								teaser="End-to-end model pipeline and Flask API with monitoring and usage instrumentation. Built to handle real-time sports telemetry data."
								tech={["Python", "scikit-learn", "Flask", "Docker", "GCP"]}
								repoLink="https://github.com/mavina15/wnba-predictive-app"
								demoLink="https://wnbaflask-595f54052c18.herokuapp.com/"
								readMoreLink="/projects/wnba-matrix"
							/>

							<ProjectItem
								title="Breast Cancer Classification"
								impact="~95% test accuracy · reproducible pipeline"
								teaser="Classifier comparison with k-fold cross-validation; includes automated model cards and reproducible Dockerized training scripts."
								tech={["Python", "scikit-learn", "pandas", "NumPy"]}
								repoLink="https://github.com/mavina15/breast-cancer-classification"
								demoLink="#"
								readMoreLink="/projects/breast-cancer-classification"
							/>
						</div>

						<div className="mt-auto pt-8 text-xs text-gray-400 flex justify-between items-center">
							<span>B.S., Applied Mathematics — UC Davis</span>
							<span>Based in Bay Area / Remote</span>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
};

/* Components */

const AboutItem = ({ icon, primary, detail }) => (
	<li className="flex items-start gap-4">
		<span className="text-xl mt-0.5">{icon}</span>
		<div className="leading-tight">
			<p className="text-sm font-bold text-gray-900">{primary}</p>
			<p className="text-sm text-gray-500 mt-0.5">{detail}</p>
		</div>
	</li>
);

const ProjectItem = ({ title, impact, teaser, tech = [], repoLink, demoLink, readMoreLink }) => (
	<article className="p-6 rounded-xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-lg transition-all duration-300 group">
		<div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
			<div className="flex-1">
				<div className="flex items-center gap-3">
					<h3 className="text-2xl font-bold text-gray-900 group-hover:text-accentOrange transition-colors">{title}</h3>
				</div>
				<p className="text-xs font-bold text-accentOrange mt-1 uppercase tracking-widest">{impact}</p>
				<p className="text-base text-gray-600 mt-3 leading-relaxed">{teaser}</p>
				<div className="mt-4 flex flex-wrap gap-2">
					{tech.map(t => (
						<span key={t} className="bg-white border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full font-semibold">{t}</span>
					))}
				</div>
			</div>

			<div className="flex xl:flex-col items-center gap-3 shrink-0 w-full xl:w-40">
				{repoLink && (
					<a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-center text-sm py-2.5 px-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 w-full transition-all font-bold">
						Source Code
					</a>
				)}
				{demoLink && demoLink !== "#" && (
					<a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-center text-sm py-2.5 px-4 bg-gray-900 text-white rounded-xl font-bold w-full shadow-md hover:bg-accentOrange transition-all">
						Live Demo
					</a>
				)}
			</div>
		</div>
	</article>
);

export default ParallaxSection;