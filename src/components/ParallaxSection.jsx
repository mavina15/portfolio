import React from 'react';
import Nav from './Nav';
import profilePic from './img/profile-pic.png';
import mailIcon from './img/mail-app.png';
import githubIcon from './img/github-app.png';
import linkedinIcon from './img/linkedin-app.png';
import bannerPic from './img/ordinary differential equations.png';

const Dashboard = () => {
	return (
		<div className="min-h-screen bg-gray-50 p-6 mt-10">
			{/* Navigation */}
			<div className="mb-6">
				<Nav />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{/* Home Section */}
				<div className="md:col-span-1 bg-white border border-gray-200 rounded-lg shadow-lg p-6">
					<div className="flex flex-col items-center">
						<div className="relative w-full bg-cover rounded-xl" style={{ backgroundImage: `url(${bannerPic})`, height: '150px' }}>
							<div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex items-center justify-center w-40 h-40 bg-white rounded-full border-4 border-white">
								<img className="h-full w-full rounded-full" src={profilePic} alt="profile image" />
							</div>
						</div>
						<h1 className="text-4xl text-gray-900 mt-16 mb-2">Mel Avina-Beltran</h1>
						<p className="text-xl font-semibold text-orange-600 mb-4">Data Scientist + Software Engineer</p>
						<p className="text-center text-lg text-gray-700 mb-6">Passionate about leveraging technology to solve real-world problems.</p>
						<div className="flex space-x-4 mb-6">
							<a href="mailto:your.email@example.com" className="hover:text-gray-800">
								<img src={mailIcon} alt="Mail Icon" className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110" />
							</a>
							<a href="https://github.com/mavina15" className="hover:text-gray-800">
								<img src={githubIcon} alt="Github Icon" className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110" />
							</a>
							<a href="https://linkedin.com/in/mavinabeltran" className="hover:text-gray-800">
								<img src={linkedinIcon} alt="LinkedIn Icon" className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110" />
							</a>
						</div>
						<a href="./img/6 Mel Avina-Beltran Resume.pdf" download className="inline-block mt-4 bg-orange-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-orange-500 transition-colors">
							Download Resume
						</a>
					</div>
				</div>

				{/* About Section */}
				<div className="md:col-span-2 bg-white border border-gray-200 rounded-lg shadow-lg p-6">
					<h2 className="text-2xl font-semibold text-orange-600 mb-4">About</h2>
					<p className="text-lg text-gray-400 mb-4">2024</p>
					<ul className="text-gray-700 space-y-4 mb-4">
						<li className="flex items-center">
							<svg className="w-6 h-6 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM8.942 14.678l-4.55-4.55a.646.646 0 0 1 .914-.914l3.252 3.253 7.114-7.113a.646.646 0 0 1 .914.914l-7.77 7.77a.646.646 0 0 1-.914 0z" />
							</svg>
							<span className="font-semibold text-lg">🐮 B.S. Applied Mathematics, UC Davis</span>
						</li>
						<li className="flex items-center">
							<svg className="w-6 h-6 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM8.942 14.678l-4.55-4.55a.646.646 0 0 1 .914-.914l3.252 3.253 7.114-7.113a.646.646 0 0 1 .914.914l-7.77 7.77a.646.646 0 0 1-.914 0z" />
							</svg>
							<span className="font-semibold text-lg">🏴‍☠️ A.S. General Science, Santa Monica College</span>
						</li>
					</ul>
					<h3 className="text-xl font-semibold mb-2">Leadership</h3>
					<ul className="text-gray-700 space-y-2 mb-4">
						<li className="flex items-center">
							🌈 President of La Familia de UC Davis
						</li>
						<li className="flex items-center">
							⚛️ Academic Officer of CALESS (the Chicanx and Latinx Scientists and Engineers Society)
						</li>
					</ul>
					<h3 className="text-xl font-semibold mb-2">Projects</h3>
					<ul className="text-gray-700 space-y-4">
						<li className="flex flex-col">
							<div className="mb-2">
								<span className="font-semibold">🏀 WNBA Matrix</span>
								<p className="text-sm text-gray-500 mb-2">Predict the outcome of WNBA games using data analysis and machine learning techniques.</p>
							</div>
							<div className="flex items-center mt-auto">
								<a href="https://wnbaflask-595f54052c18.herokuapp.com/" target="_blank" className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
									Live Demo
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
									</svg>
								</a>
								<a href="#" className="ml-2 text-blue-700 hover:text-blue-800">
									Read More
								</a>
							</div>
						</li>
						<li className="flex flex-col">
							<div className="mb-2">
								<span className="font-semibold">🩻 Breast Cancer Classification</span>
								<p className="text-sm text-gray-500 mb-2">Develop and evaluate machine learning models to accurately classify breast tumors as malignant or benign using features extracted from digitized images, contributing to early detection and diagnosis of breast cancer for improved patient outcomes.</p>
							</div>
							<div className="flex items-center mt-auto">
								<a href="https://wnbaflask-595f54052c18.herokuapp.com/" className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
									Live Demo
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
									</svg>
								</a>
								<a href="#" className="ml-2 text-blue-700 hover:text-blue-800">
									Read More
								</a>
							</div>
						</li>
						<li className="flex flex-col">
							<div className="mb-2">
								<span className="font-semibold">💳 Network Anomaly Detector</span>
								<p className="text-sm text-gray-500 mb-2">Vivamus in augue in nisl consectetur tristique. Nunc auctor metus ut orci cursus, id aliquet elit suscipit.</p>
							</div>
							<div className="flex items-center mt-auto">
								<a href="https://wnbaflask-595f54052c18.herokuapp.com/" className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
									Live Demo
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
									</svg>
								</a>
								<a href="#" className="ml-2 text-blue-700 hover:text-blue-800">
									Read More
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;





