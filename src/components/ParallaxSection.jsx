import React from 'react';
import Nav from './Nav';
import profilePic from './img/profile-pic.png';
import mailIcon from './img/mail-app.png';
import githubIcon from './img/github-app.png';
import linkedinIcon from './img/linkedin-app.png';
import rocCurve from './img/roccurve.png';
import wnbaPredictionImage from './img/2022-WNBA-PREVIEW-4x3-1.webp';
import bannerPic from './img/ordinary differential equations.png';
import mathImage from './img/deqn.jpeg';

const ParallaxSection = () => {
	return (
		<div className="relative overflow-hidden min-h-screen bg-white">
			<Nav />

			{/* Home Section */}
			<section id="home" className="bg-white py-20 px-4 m-20">
				<div className="container mx-auto max-w-4xl">
					<div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg p-8">
						{/* Profile Image */}
						<div className="relative mt-1 h-32 w-full bg-cover rounded-xl" style={{ backgroundImage: `url(${bannerPic})` }}>
							<div className="absolute bottom-[-50px] left-1/2 transform translate-x-[-50%] flex items-center justify-center w-40 h-40 bg-white rounded-full border-4 border-white">
								<img className="h-full w-full rounded-full" src={profilePic} alt="profile image" />
							</div>
						</div>

						<h1 className="text-4xl text-gray-900 mt-16 mb-2">Mel Avina-Beltran</h1>
						<p className="text-xl font-semibold text-accentOrange mb-4">Data Scientist + Software Engineer</p>
						<p className="text-center text-lg text-gray-700 mb-6">Passionate about leveraging technology to solve real-world problems.</p>
						{/* Contact Links */}
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
						{/* Download Resume Button */}
						<a href="./img/6 Mel Avina-Beltran  Resume.pdf" download className="inline-block mt-4 bg-accentOrange text-white py-2 px-4 rounded-lg shadow-lg hover:bg-accentYellow transition-colors">
							Download Resume
						</a>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="bg-white py-20 px-4 m-20">
				<div className="container mx-auto max-w-7xl">
					<div className="col-span-2 bg-white border border-gray-200 rounded-lg shadow-lg p-6">
						<div className="flex items-center mb-2">
							<svg className="w-6 h-6 text-accentYellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
							</svg>
							<div className="ml-3 text-xl font-semibold text-accentYellow">About</div>
						</div>
						<p className="text-lg text-center text-gray-400 mb-4">2024</p>
						<ul className="text-gray-700 list-none list-inside mb-4">
							<li className="flex items-center mb-2">
								<svg className="w-5 h-5 text-accentYellow mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM8.942 14.678l-4.55-4.55a.646.646 0 0 1 .914-.914l3.252 3.253 7.114-7.113a.646.646 0 0 1 .914.914l-7.77 7.77a.646.646 0 0 1-.914 0z" />
								</svg>
								<span className="font-semibold text-2xl ml-2">🐮 B.S. Applied Mathematics, UC Davis</span>
							</li>
							<li className="flex items-center mb-2">
								<svg className="w-5 h-5 text-accentYellow mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM8.942 14.678l-4.55-4.55a.646.646 0 0 1 .914-.914l3.252 3.253 7.114-7.113a.646.646 0 0 1 .914.914l-7.77 7.77a.646.646 0 0 1-.914 0z" />
								</svg>
								<span className="font-semibold text-2xl ml-2">🏴‍☠️ A.S. General Science, Santa Monica College</span>
							</li>
						</ul>
						<h2 className="underline text-2xl font-semibold mb-2">Leadership</h2>
						<p className="text-lg mb-2">🌈 President of La Familia de UC Davis</p>
						<p className="text-lg mb-2">⚛️ Academic Officer of CALESS (the Chicanx and Latinx Scientists and Engineers Society)</p>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="bg-white py-20 px-4 m-20">
				<div className="container mx-auto max-w-7xl">
					<h1>Projects</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Card 1 */}
						<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
							<a href="#">
								<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">🏀 WNBA Matrix</h5>
							</a>
							<p className="mb-3 font-normal text-gray-700">Tech used: Python, Pandas, Scikit-learn</p>
							<a href="https://wnbaflask-595f54052c18.herokuapp.com/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
								Live demo
								<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
								</svg>
							</a>
						</div>
						{/* Card 2 */}
						<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
							<a href="#">
								<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">🩻 Breast Cancer Classification</h5>
							</a>
							<p className="mb-3 font-normal text-gray-700">Tech used: Python, Pandas, Scikit-learn</p>
							<a href="https://wnbaflask-595f54052c18.herokuapp.com/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
								Live demo
								<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
								</svg>
							</a>
						</div>
						{/* Card 3 */}
						<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
							<a href="#">
								<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">💳 Network Anamoly Detector</h5>
							</a>
							<p className="mb-3 font-normal text-gray-700">Tech used: Python, Pandas, Scikit-learn</p>
							<a href="https://wnbaflask-595f54052c18.herokuapp.com/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
								Live demo
								<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ParallaxSection;

