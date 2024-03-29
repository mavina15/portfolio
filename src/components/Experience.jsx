import React from "react";

const Experience = () => {
	return (
		<div id="experience" className="container mx-auto p-4 max-w-5xl">

			<h2 class="text-3xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r 
				bg-clip-text text-transparent">experience</h2>
			<div class="max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow mb-8 flex items-start">
				<img class="w-20 h-20 p-1 rounded-full ring-2 ring-pink-600" src="./img/codelablogo.jpeg" alt="Bordered avatar" />
				<div class="ml-4">
					<a href="#">
						<h5 class="text-xl font-bold mb-2 whitespace-nowrap">Junior Developer and Project Manager @ <a href="https://www.codelabdavis.com/" target="_blank" class="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom">CODELAB</a></h5>
						<h3 class="text-xl font-bold mb-2">Winter - Spring 2023</h3>
					</a>
					<p class="mb-3 font-normal text-gray-500">As the Senior Developer at UC Davis Codelab, I had the privilege of leading a dynamic team of 4 developers and designers through a transformative 15-week project.</p>
					<a href="https://codelabdavis.medium.com/coursewise-2b9547becdf8" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-600 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-200" target="_blank">
						Read more
						<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
						</svg>
					</a>
				</div>
			</div>

			<div class="max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow mb-8 flex items-start">
				<img class="w-20 h-20 p-1 rounded-full ring-2 ring-pink-600" src="./img/ucd seal.svg.png" alt="Bordered avatar" />
				<div class="ml-4">
					<a href="#">
						<h5 class="text-xl font-bold mb-2 whitespace-nowrap">Junior Developer @ <a href="https://www.math.ucdavis.edu/" target="_blank" class="bg-gradient-to-r
							 from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom">UC DAVIS MATH DEPARTMENT</a></h5>
						<h3 class="text-xl font-bold mb-2">Winter - Spring 2022</h3>
					</a>
					<p class="mb-3 font-normal text-gray-500 ">As a Software Developer at UC Davis Math Department from January to June 2022, I took the lead in crafting a cutting-edge Google Sheets extension powered by Google Apps Script and JavaScript.</p>
					<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-600 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-200 ">
						Read more
						<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
						</svg>
					</a>
				</div>
			</div>

		</div >
	);
};

export default Experience;