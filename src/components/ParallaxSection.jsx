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
				{/* Home Section */}
				<div className="md:col-span-1 bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col">
					<div className="flex flex-col items-center mb-6">
						<div
							className="relative w-full bg-cover rounded-xl"
							style={{ backgroundImage: `url(${bannerPic})`, height: '150px' }}
							role="img"
							aria-label="banner showing mathematical illustration"
						>
							<div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex items-center justify-center w-40 h-40 bg-white rounded-full border-4 border-white">
								<img
									className="h-full w-full rounded-full"
									src={profilePic}
									alt="Mel Avina-Beltran profile"
								/>
							</div>
						</div>

						<h1 className="text-4xl text-gray-900 mt-16 mb-2">Mel Avina-Beltran</h1>
						<p className="text-xl font-semibold text-orange-600 mb-2">Data Engineer • Analytics Engineer</p>

						{/* Metric-led one-line value statement */}
						<p className="text-center text-lg text-gray-700 mb-4">
							I build production ETL, schema tests, and monitored analytics that double stakeholder
							visibility and reduce triage time by 65%.
						</p>

						{/* CTAs */}
						<div className="flex space-x-3 mb-4">
							<a
								href="/resume-data-engineer.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
								aria-label="Download resume as PDF"
							>
								Resume (Data Engineer)
							</a>
							<a
								href="mailto:melavinabeltran@gmail.com"
								className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
								aria-label="Email Mel"
							>
								Contact
							</a>
						</div>

						<div className="flex space-x-4 mb-4">
							<a href="mailto:melavinabeltran@gmail.com" aria-label="Send email to Mel">
								<img src={mailIcon} alt="Email icon" className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110" />
							</a>
							<a href="https://github.com/mavina15" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile">
								<img src={githubIcon} alt="GitHub icon" className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110" />
							</a>
							<a href="https://linkedin.com/in/mavinabeltran" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile">
								<img src={linkedinIcon} alt="LinkedIn icon" className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110" />
							</a>
						</div>
					</div>

					<div className="flex-1 overflow-auto">
						<h2 className="text-2xl font-semibold text-orange-600 my-4">About</h2>
						<ul className="text-gray-700 space-y-2">
							<AboutItem icon="🎓" text="B.S. Applied Mathematics, UC Davis (Dec 2023)" />
							<AboutItem icon="🛠️" text="Primary: Python, SQL, PySpark; ETL, CI, monitoring" />
							<AboutItem icon="⚡" text="Focus: Analytics pipelines, schema validation, production monitoring" />
						</ul>
					</div>
				</div>

				{/* Projects + Education Section */}
				<div className="md:col-span-2 bg-white border border-gray-200 rounded-lg shadow-lg p-6">
					<h2 className="text-2xl font-semibold text-orange-600 mb-4">Selected Projects</h2>

					<ProjectItem
						title="Analytics ETL — Reproducible Pipeline"
						impact="Reduced pipeline failures 80% and shortened detection time from days to <2 hours."
						description="Built ingestion → staging → modeled tables pipeline with schema tests, CI, and monitoring dashboards to support weekly executive reporting."
						demoLink="https://github.com/mavina15/analytics-etl-examples"
						readMoreLink="/projects/analytics-etl"
					/>

					<ProjectItem
						title="Network Anomaly Detector"
						impact="Achieved 92% detection and cut triage time 65%."
						description="Trained deep autoencoder (TensorFlow); deployed evaluation dashboards for real-time alerting and triage."
						demoLink="https://github.com/mavina15/network-anomaly-detector"
						readMoreLink="/projects/network-anomaly"
					/>

					<ProjectItem
						title="WNBA Predictive App"
						impact="Reached 70.4% holdout accuracy and optimized inference <200ms."
						description="Built end-to-end model pipeline and Flask API with monitoring; instrumented usage metrics for ongoing model health checks."
						demoLink="https://wnbaflask-595f54052c18.herokuapp.com/"
						readMoreLink="/wnba-matrix"
					/>

					{/* Education Section */}
					<h2 className="text-2xl font-semibold text-orange-600 mt-8 mb-4">Education</h2>
					<EducationItem
						title="University of California, Davis"
						description="B.S. Applied Mathematics"
						otherDescription="Relevant coursework: Data Structures, Probability, Optimization, Applied Linear Algebra, Numerical Methods"
					/>
					<EducationItem
						title="Western Governors University"
						description="M.S. Teaching, Mathematics Education"
						otherDescription="Secondary curriculum methods, statistics for educators; focused on data-driven instruction design"
					/>
				</div>
			</div>
		</div>
	);
};

const AboutItem = ({ icon, text }) => (
	<li className="flex items-start">
		<span className="text-orange-600 mr-3 text-xl">{icon}</span>
		<span className="font-medium text-gray-800">{text}</span>
	</li>
);

const ProjectItem = ({ title, impact, description, demoLink, 
