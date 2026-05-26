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
		<div className="h-screen bg-gray-50 mt-14 overflow-hidden">
			<Nav />

			<main className="max-w-content mx-auto h-[calc(100vh-4rem)] px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
					{/* LEFT: Profile card */}
					<aside className="md:col-span-1 card p-4 flex flex-col h-full">
						<div className="relative">
							<div
								className="w-full rounded-xl bg-cover"
								style={{ backgroundImage: `url(${bannerPic})`, height: 120 }}
								role="img"
								aria-label="Mathematical illustration banner"
							/>
							<div
								className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-white border-4 border-white overflow-hidden"
								style={{ top: 90 }}
							>
								<img src={profilePic} alt="Mel Avina-Beltran" className="w-full h-full object-cover" />
							</div>
						</div>

						<div className="mt-16 text-center">
							<h1 className="hero-title">Mel Avina‑Beltran</h1>
							<p className="text-base font-semibold text-accentOrange mt-1">Data Engineer • Analytics Engineer</p>
							<p className="text-sm text-gray-700 mt-3 max-w-xs mx-auto">
								I build production ETL, schema tests, and monitored analytics that double stakeholder visibility and cut triage time by 65%.
							</p>
						</div>

						<div className="mt-3 flex items-center justify-center gap-3">
							<a href="/resume-data-engineer.pdf" className="btn-primary" aria-label="Open resume PDF">Resume</a>
							<a href="mailto:melavinabeltran@gmail.com" className="btn-ghost" aria-label="Email Mel">Contact</a>
						</div>

						<div className="mt-3 flex items-center justify-center gap-4">
							<a href="mailto:melavinabeltran@gmail.com" aria-label="Email">
								<img src={mailIcon} alt="email" className="w-7 h-7" />
							</a>
							<a href="https://github.com/mavina15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
								<img src={githubIcon} alt="github" className="w-7 h-7" />
							</a>
							<a href="https://linkedin.com/in/mavinabeltran" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
								<img src={linkedinIcon} alt="linkedin" className="w-7 h-7" />
							</a>
						</div>

						<div className="mt-auto">
							<h2 className="text-base font-semibold text-accentOrange mb-2">About</h2>
							<ul className="text-sm text-gray-700 space-y-2">
								<AboutItem icon="🎓" primary="B.S. Applied Mathematics, UC Davis (Dec 2023)" />
								<AboutItem icon="🛠️" primary="Primary:" detail="Python, SQL, PySpark — ETL, schema tests, monitoring" />
								<AboutItem icon="📈" primary="Impact:" detail="Doubled stakeholder visibility; reduced triage time 65%" />
							</ul>
						</div>
					</aside>

					{/* RIGHT: Projects column */}
					<section className="md:col-span-2 card p-4 flex flex-col h-full overflow-hidden">
						<h2 className="text-xl font-semibold text-accentOrange mb-3">Projects</h2>

						<div className="overflow-auto space-y-4 pr-2" style={{ maxHeight: "calc(100vh - 200px)" }}>
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

						<div className="mt-3 text-xs text-gray-500">
							B.S., Applied Mathematics — UC Davis (Dec 2023) • Based in Bay Area, open to remote
						</div>
					</section>
				</div>
			</main>
		</div>
	);
};

/* Reusable subcomponents (single definitions) */

const AboutItem = ({ icon, primary, detail }) => (
	<li className="flex items-start">
		<span className="text-accentOrange mr-3 text-lg">{icon}</span>
		<div>
			{detail ? (
				<p className="text-sm text-gray-800">
					<span className="font-semibold">{primary}</span>{" "}
					<span className="text-gray-600">{detail}</span>
				</p>
			) : (
				<p className="text-sm text-gray-800"><span className="font-semibold">{primary}</span></p>
			)}
		</div>
	</li>
);

const ProjectItem = ({ title, impact, teaser, tech = [], repoLink, demoLink, readMoreLink }) => (
	<article className="project-card p-3">
		<div className="flex flex-col md:flex-row md:justify-between">
			<div className="md:flex-1">
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="text-xs font-semibold text-gray-800 mt-1">{impact}</p>
				<p className="text-sm text-gray-500 mt-2">{teaser}</p>
				<div className="mt-2 flex flex-wrap gap-2">
					{tech.map(t => <span key={t} className="badge">{t}</span>)}
				</div>
			</div>

			<div className="mt-3 md:mt-0 md:ml-4 flex gap-2">
				{repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn-ghost">Repo</a>}
				{demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary">Live Demo</a>}
				{readMoreLink && <Link to={readMoreLink} className="text-blue-700 text-sm">Read →</Link>}
			</div>
		</div>
	</article>
);

export default Dashboard;

const AboutItem = ({ icon, primary, detail }) => (
	<li className="flex items-start">
		<span className="text-accentOrange mr-3 text-lg">{icon}</span>
		<div>
			{detail ? (
				<p className="text-sm text-gray-800">
					<span className="font-semibold">{primary}</span>{" "}
					<span className="text-gray-600">{detail}</span>
				</p>
			) : (
				<p className="text-sm text-gray-800"><span className="font-semibold">{primary}</span></p>
			)}
		</div>
	</li>
);

const ProjectItem = ({ title, impact, teaser, tech = [], repoLink, demoLink, readMoreLink }) => (
	<article className="project-card p-3">
		<div className="flex flex-col md:flex-row md:justify-between">
			<div className="md:flex-1">
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="text-xs font-semibold text-gray-800 mt-1">{impact}</p>
				<p className="text-sm text-gray-500 mt-2">{teaser}</p>
				<div className="mt-2 flex flex-wrap gap-2">
					{tech.map(t => <span key={t} className="badge">{t}</span>)}
				</div>
			</div>

			<div className="mt-3 md:mt-0 md:ml-4 flex gap-2">
				{repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn-ghost">Repo</a>}
				{demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary">Live Demo</a>}
				{readMoreLink && <Link to={readMoreLink} className="text-blue-700 text-sm">Read →</Link>}
			</div>
		</div>
	</article>
);



const AboutItem = ({ icon, primary, detail }) => (
	<li className="flex items-start">
		<span className="text-orange-600 mr-3 text-xl">{icon}</span>
		<div>
			{detail ? (
				<p className="text-sm text-gray-800">
					<span className="font-semibold">{primary}</span>{" "}
					<span className="text-gray-600">{detail}</span>
				</p>
			) : (
				<p className="text-sm text-gray-800"><span className="font-semibold">{primary}</span></p>
			)}
		</div>
	</li>
);


const ProjectItem = ({ title, impact, teaser, tech = [], repoLink, demoLink, readMoreLink }) => (
	<article className="project-card mb-6">
		<div className="flex flex-col md:flex-row md:items-start md:justify-between">
			<div className="md:flex-1">
				<h3 className="text-xl font-semibold">{title}</h3>
				<p className="text-sm font-semibold text-gray-800 mt-1">{impact}</p>
				<p className="text-sm text-gray-500 mt-2">{teaser}</p>
				<div className="mt-3 flex flex-wrap gap-2">
					{tech.map(t => (
						<span key={t} className="badge">{t}</span>
					))}
				</div>
			</div>

			<div className="mt-4 md:mt-0 md:ml-6 flex flex-row md:flex-col items-start gap-2">
				{repoLink && (
					<a
						href={repoLink}
						target="_blank"
						rel="noopener noreferrer"
						className="btn-ghost"
						aria-label={`Open repo for ${title}`}
					>
						Repo
					</a>
				)}
				{demoLink && (
					<a
						href={demoLink}
						target="_blank"
						rel="noopener noreferrer"
						className="btn-primary"
						aria-label={`Open demo for ${title}`}
					>
						Live Demo
					</a>
				)}
				{readMoreLink && (
					<Link to={readMoreLink} className="text-blue-700 text-sm mt-1" aria-label={`Read case study for ${title}`}>
						Read case study →
					</Link>
				)}
			</div>
		</div>
	</article>
);


export default Dashboard;