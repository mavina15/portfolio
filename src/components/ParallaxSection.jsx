import React from 'react';
import Nav from './Nav';
import profilePic from './img/memoji02.png'; // Adjust the path based on your project structure
import mailIcon from './img/mail-app.png'; // Replace with actual path to mail icon
import githubIcon from './img/github-app.png'; // Replace with actual path to GitHub icon
import linkedinIcon from './img/linkedin-app.png'; // Replace with ac


const ParallaxSection = () => {
	return (
		<div className="relative overflow-hidden min-h-screen">
			<Nav />

			{/* Home Section */}
			<section id="home" className="bg-white bg-opacity-80 py-20 px-4 m-20">
				<div className="container mx-auto max-w-7xl">
					<div className="grid grid-cols-3 items-start lg:grid-cols-3 gap-8">
						<div className="col-span-1 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow pt-4">
							<div className="flex flex-col items-center pb-5">
								{/* Profile Image */}
								<div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-tr from-pink-500 to-pink-300 flex items-center justify-center">
									<img className="w-24 h-24 object-cover" src={profilePic} alt="profile image" />
								</div>
								<span className="text-xl text-gray-400 lowercase">He, Him, His</span>
								<h5 className="mb-1 text-2xl text-gray-900">Mel Avina-Beltran</h5>
								<span className="mb-2 text-xl font-semibold text-pink-500 lowercase">Data Scientist + Software Engineer</span>

								{/* Contact Links */}
								<div className="flex mt-2 md:mt-4">
									<a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800">
										<img src={mailIcon} alt="Mail Icon" className="w-10 h-10 rounded-lg" />
									</a>
									<a href="https://github.com/mavina15" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800">
										<img src={githubIcon} alt="Github Icon" className="w-10 h-10 rounded-lg" />
									</a>
									<a href="https://linkedin.com/in/mavinabeltran" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800">
										<img src={linkedinIcon} alt="LinkedIn Icon" className="w-10 h-10 rounded-lg" />
									</a>
								</div>
							</div>
						</div>

						<div className="col-span-2 bg-white p-4">
							<div className="text-lg text-pretty text-gray-600">
								<p className="font-bold lowercase">Data scientist and software engineer passionate about</p>
								<p className="font-bold text-black text-4xl lowercase">leveraging technology to solve real-world problems.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="about" className="bg-white bg-opacity-80 py-20 px-4 mb-20">
				<div className="container mx-auto max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Left Section */}
						<div className="lg:col-span-1 bg-opacity-20 shadow-md rounded-lg p-6 flex flex-col justify-start">
							<div className="flex items-center mb-1">
								<div className="flex-shrink-0">
									<svg
										className="w-6 h-6 text-yellow-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 19l-7-7 7-7"
										></path>
									</svg>
								</div>
								<div className="ml-3 text-lg font-semibold text-yellow-600">Notes</div>
							</div>
							<p className="text-md text-center text-gray-400 mb-2">2024</p>
							<ul className="text-black-700 list-none list-inside">
								<li className="flex items-center mb-2">
									<svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM8.942 14.678l-4.55-4.55a.646.646 0 0 1 .914-.914l3.252 3.253 7.114-7.113a.646.646 0 0 1 .914.914l-7.77 7.77a.646.646 0 0 1-.914 0z"
										></path>
									</svg>
									<span className="ml-2">🐮 B.S. Applied Mathematics, UC Davis</span>
								</li>
								<li className="flex items-center mb-2">
									<svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM8.942 14.678l-4.55-4.55a.646.646 0 0 1 .914-.914l3.252 3.253 7.114-7.113a.646.646 0 0 1 .914.914l-7.77 7.77a.646.646 0 0 1-.914 0z"
										></path>
									</svg>
									<span className="ml-2">🏴‍☠️ A.S. General Science, Santa Monica College</span>
								</li>
							</ul>
							<br />
							<h2 className="underline font-semibold">Projects</h2>
							<p>🏀 WNBA Matrix</p>
							<p>🩻 Breast Cancer Classification</p>
							<br />
							<h2 className="underline font-semibold">Leadership</h2>
							<p>🌈 President of La Familia de UC Davis</p>
							<p>⚛️ Academic Officer of CALESS (the Chicanx and Latinx Scientists and Engineers Society)</p>
						</div>

						{/* Right Section */}
						<div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
							<div className="text-lg text-gray-700">
								<h2 className="text-3xl font-bold text-gray-900 mb-4 lowercase">About Me</h2>
								<p className="mb-4">
									I am Mel Avina-Beltran, a data scientist and software engineer passionate about leveraging technology to solve real-world problems. I hold a Bachelor of Science in Applied Mathematics from the University of California, Davis, and an Associate of Science in General Science from Santa Monica College. My experience includes serving as a Junior Developer and Project Manager at UC Davis Codelab, where I led a team of developers and designers through a transformative 15-week project. At the UC Davis Math Department, I developed a cutting-edge Google Sheets extension using Google Apps Script and JavaScript to enhance data visualization for infectious disease modeling. In addition to my technical roles, I have demonstrated strong leadership as President of La Familia de UC Davis and External Academic Chair at CALESS, where I spearheaded initiatives to support academic excellence and community engagement. My diverse background reflects my commitment to using technology for impactful, real-world applications.
								</p>
							</div>
						</div>
					</div>
				</div >
			</section >

			{/* Projects Section */}
			<section id="projects" className="bg-white bg-opacity-80 py-20 px-4 mb-20">
				<div className="container mx-auto max-w-7xl">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-8 lowercase">My Projects</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Project 1 */}
						<div className="bg-white rounded-lg shadow-md p-6">
							<h3 className="text-xl font-bold text-gray-800 mb-2">WNBA Game Prediction</h3>
							<p className="underline font-semibold">Goal</p>
							<p className="text-gray-700 mb-4">Predict the outcome of WNBA games using data analysis and machine learning techniques.</p>
							<p className="underline font-semibold">Technologies Used</p>
							<p className="text-gray-700 mb-4">HTML, CSS, JS</p>
							<a href="https://wnbaflask-595f54052c18.herokuapp.com/" className="text-blue-500 hover:text-blue-600 font-semibold">Live Demo</a>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-2">
								Learn More
							</button>
						</div>

						{/* Project 2 */}
						<div className="bg-white rounded-lg shadow-md p-6">
							<h3 className="text-xl font-bold text-gray-800 mb-2">WNBA Game Prediction</h3>
							<p className="underline font-semibold">Goal</p>
							<p className="text-gray-700 mb-4">Predict the outcome of WNBA games using data analysis and machine learning techniques.</p>
							<p className="underline font-semibold">Technologies Used</p>
							<p className="text-gray-700 mb-4">HTML, CSS, JS</p>
							<a href="https://wnbaflask-595f54052c18.herokuapp.com/" className="text-blue-500 hover:text-blue-600 font-semibold">Live Demo</a>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-2">
								Learn More
							</button>
						</div>

						{/* Project 3 */}
						<div className="bg-white rounded-lg shadow-md p-6">
							<h3 className="text-xl font-bold text-gray-800 mb-2">WNBA Game Prediction</h3>
							<p className="underline font-semibold">Goal</p>
							<p className="text-gray-700 mb-4">Predict the outcome of WNBA games using data analysis and machine learning techniques.</p>
							<p className="underline font-semibold">Technologies Used</p>
							<p className="text-gray-700 mb-4">HTML, CSS, JS</p>
							<a href="https://wnbaflask-595f54052c18.herokuapp.com/" className="text-blue-500 hover:text-blue-600 font-semibold">Live Demo</a>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-2">
								Learn More
							</button>
						</div>
					</div>
				</div>
			</section>

		</div >
	);
};

export default ParallaxSection;




