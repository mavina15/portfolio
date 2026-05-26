import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import profilePic from './img/profile-pic.png';
import mailIcon from './img/mail-app.png';
import githubIcon from './img/github-app.png';
import linkedinIcon from './img/linkedin-app.png';
import bannerPic from './img/ordinary-differential-equations.png';

const Dashboard = () => {
	return (
		<div className="min-h-screen bg-gray-50 p-6 mt-14">
			{/* Navigation */}
			<div className="mb-6">
				<Nav />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{/* Home Section (fits one page, About at bottom) */}
				<div className="md:col-span-1 bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col h-screen max-h-[calc(100vh-4rem)] overflow-hidden">
					<div className="flex flex-col items-center mb-4">
						<div
							className="relative w-full bg-cover rounded-xl"
							style={{ backgroundImage: `url(${bannerPic})`, height: '150px' }}
							role="img"
							aria-label="Mathematical illustration banner"
						>
							<div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-40 h-40 bg-white rounded-full border-4 border-white">
								<img className="h-full w-full rounded-full" src={profilePic} alt="Mel Avina-Beltran profile" />
							</div>
						</div>

						<h1 className="text-4xl text-gray-900 mt-16 mb-1">Mel Avina-Beltran</h1>
						<p className="text-lg font-semibold text-orange-600 mb-2">Data Engineer • Analytics Engineer</p>

						<p className="text-center text-sm text-gray-700 mb-3 max-w-xs">
							I build production ETL, schema tests, and monitored analytics that double stakeholder visibility and cut triage time by 65%.
						</p>

						{/* CTAs */}
						<div className="flex space-x-3 mb-3">
							<a
								href="/resume-data-engineer.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
								aria-label="Open Data Engineer resume PDF"
							>
								Resume (Data Engineer)
							</a>

							<a
								href="mailto:melavinabeltran@gmail.com"
								className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
								aria-label="Email Mel"
							>
								Contact
							</a>
						</div>

						<div className="flex space-x-4 mb-2">
							<a href="mailto:melavinabeltran@gmail.com" aria-label="Email">
								<img src={mailIcon} alt="Email icon" className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110" />
							</a>
							<a href="https://github.com/mavina15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
								<img src={githubIcon} alt="GitHub icon" className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110" />
							</a>
							<a href="https://linkedin.com/in/mavinabeltran" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
								<img src={linkedinIcon} alt="LinkedIn icon" className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110" />
							</a>
						</div>

						<p className="text-xs text-gray-500">Location: Bay Area, CA — Open to remote</p>
					</div>

					{/* spacer ensures About stays pinned to bottom */}
					<div className="flex-1" />

					<div className="mt-4">
						<h2 className="text-2xl font-semibold text-orange-600 my-2">About</h2>
						<ul className="text-gray-700 space-y-2">
							<AboutItem icon="🎓" primary="B.S. Applied Mathematics, UC Davis (Dec 2023)" />
							<AboutItem icon="🛠️" primary="Primary:" detail="Python, SQL, PySpark — ETL, schema tests, monitoring" />
							<AboutItem icon="📈" primary="Impact:" detail="Doubled stakeholder visibility; reduced triage time 65%" />
						</ul>
					</div>
				</div>


				{/* Projects Section */}
				<div className="md:col-span-2 card p-6">
					<h2 className="text-2xl font-semibold text-orange-600 mb-4">Projects</h2>

					<ProjectItem
						title="WNBA Matrix"
						impact="70.4% holdout accuracy · inference <200ms"
						teaser="End-to-end model pipeline and deployed Flask API with monitoring and usage instrumentation."
						tech={["Python", "scikit-learn", "Flask", "Docker", "CI"]}
						repoLink="https://github.com/mavina15/wnba-predictive-app"
						demoLink="https://wnbaflask-595f54052c18.herokuapp.com/"
						readMoreLink="/projects/wnba-matrix"
					/>

					<ProjectItem
						title="Breast Cancer Classification"
						impact="~95% test accuracy · reproducible pipeline"
						teaser="Compared classifiers with cross-validation, produced model card, and added training/serving scripts."
						tech={["Python", "scikit-learn", "pandas", "Jupyter"]}
						repoLink="https://github.com/mavina15/breast-cancer-classification"
						demoLink="https://your-other-demo-page-url"
						readMoreLink="/projects/breast-cancer-classification"
					/>
				</div>


			</div>
		</div>
	);
};

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