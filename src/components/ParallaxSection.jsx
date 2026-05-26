import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import profilePic from "./img/profile-pic.png";
import mailIcon from "./img/mail-app.png";
import githubIcon from "./img/github-app.png";
import linkedinIcon from "./img/linkedin-app.png";
import bannerPic from "./img/ordinary-differential-equations.png";

const Dashboard = () => {
	return (
		<div className="min-h-screen bg-gray-50 pt-20 pb-10">
			<Nav />

			<main className="max-w-5xl mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
					{/* LEFT: Profile card */}
					<aside className="md:col-span-1 bg-white border border-gray-200 rounded-lg p-5 flex flex-col shadow-sm">
						<div className="relative">
							<div
								className="w-full rounded-lg bg-cover bg-center"
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
							<h1 className="hero-title text-2xl font-bold text-gray-900">Mel Avina‑Beltran</h1>
							<p className="text-base font-semibold text-accentOrange mt-1">Data Engineer • Analytics Engineer</p>
							<p className="text-sm text-gray-600 mt-3 max-w-xs mx-auto leading-relaxed">
								I build production ETL, schema tests, and monitored analytics that double stakeholder visibility and cut triage time by 65%.
							</p>
						</div>

						<div className="mt-4 flex items-center justify-center gap-3">
							<a href="/resume-data-engineer.pdf" className="btn-primary w-24 text-center" aria-label="Open resume PDF">Resume</a>
							<a href="mailto:melavinabeltran@gmail.com" className="btn-ghost w-24 text-center" aria-label="Email Mel">Contact</a>
						</div>

						<div className="mt-4 flex items-center justify-center gap-4 border-b border-gray-100 pb-5">
							<a href="mailto:melavinabeltran@gmail.com" aria-label="Email" className="hover:opacity-80 transition-opacity">
								<img src={mailIcon} alt="email" className="w-7 h-7" />
							</a>
							<a href="https://github.com/mavina15" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-80 transition-opacity">
								<img src={githubIcon} alt="github" className="w-7 h-7" />
							</a>
							<a href="https://linkedin.com/in/mavinabeltran" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
								<img src={linkedinIcon} alt="linkedin" className="w-7 h-7" />
							</a>
						</div>

						<div className="mt-5">
							<h2 className="text-sm font-bold uppercase tracking-wider text-accentOrange mb-3">About</h2>
							<ul className="space-y-3">
								<AboutItem icon="🎓" primary="B.S. Applied Mathematics, UC Davis (Dec 2023)" />
								<AboutItem icon="🛠️" primary="Primary:" detail="Python, SQL, PySpark — ETL, schema tests, monitoring" />
								<AboutItem icon="📈" primary="Impact:" detail="Doubled stakeholder visibility; reduced triage time 65%" />
							</ul>
						</div>
					</aside>

					{/* RIGHT: Projects column */}
					<section className="md:col-span-2 bg-white border border-gray-200 rounded-lg p-6 flex flex-col shadow-sm">
						<h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Projects</h2>

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

						<div className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-400 text-center md:text-left">
							B.S., Applied Mathematics — UC Davis (Dec 2023) • Based in Bay Area, open to remote
						</div>
					</section>
				</div>
			</main>
		</div>
	);
};

/* Reusable subcomponents */

const AboutItem = ({ icon, primary, detail }) => (
	<li className="flex items-start gap-3">
		<span className="text-lg leading-none mt-0.5">{icon}</span>
		<div className="leading-tight">
			{detail ? (
				<p className="text-sm text-gray-700">
					<span className="font-semibold text-gray-900">{primary}</span>{" "}
					<span className="text-gray-500">{detail}</span>
				</p>
			) : (
				<p className="text-sm font-semibold text-gray-900">{primary}</p>
			)}
		</div>
	</li>
);

const ProjectItem = ({ title, impact, teaser, tech = [], repoLink, demoLink, readMoreLink }) => (
	<article className="project-card p-4 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors">
		<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
			<div className="md:flex-1">
				<h3 className="text-lg font-bold text-gray-900">{title}</h3>
				<p className="text-xs font-semibold text-accentOrange mt-0.5 uppercase tracking-wide">{impact}</p>
				<p className="text-sm text-gray-600 mt-2 leading-relaxed">{teaser}</p>
				<div className="mt-3 flex flex-wrap gap-1.5">
					{tech.map(t => (
						<span key={t} className="badge bg-white border border-gray-200 text-gray-700 text-xs px-2.5 py-0.5 rounded-md font-medium">{t}</span>
					))}
				</div>
			</div>

			<div className="flex md:flex-col items-center md:items-stretch gap-2 shrink-0 self-start w-full md:w-auto">
				{repoLink && (
					<a
						href={repoLink}
						target="_blank"
						rel="noopener noreferrer"
						className="btn-ghost text-center text-sm py-1.5 px-3 border border-gray-300 rounded-md hover:bg-gray-100 w-full"
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
						className="btn-primary text-center text-sm py-1.5 px-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 w-full"
						aria-label={`Open demo for ${title}`}
					>
						Live Demo
					</a>
				)}
				{readMoreLink && (
					<Link to={readMoreLink} className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-1 text-center md:text-left w-full block" aria-label={`Read case study for ${title}`}>
						Case Study →
					</Link>
				)}
			</div>
		</div>
	</article>
);

export default Dashboard;