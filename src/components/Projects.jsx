import React from "react";

const Projects = () => {

	return (
		<div id="projects" className="container mx-auto p-4 max-w-5xl">
			<h2 class="text-3xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r 
				bg-clip-text text-transparent">projects</h2>

			<div className="mb-8 p-6 mx-auto">
				<div className="flex flex-row justify-evenly">
					<div className="mb-6">
						<a href="/bike" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
							<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
								<h3 className="text-xl font-bold mb-2 lowercase">Seoul Bike Data</h3>
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Bicycle">🚲</span>
								<h3 className="text-xl font-bold mb-2 basis-1/4 lowercase">Spring 2022</h3>
							</div>
						</a>
					</div>

					<div className="mb-6">
						<a href="/cancer" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
							<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
								<h3 className="text-xl font-bold mb-2 lowercase">Breast Cancer Classification</h3>
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Hospital">🏥</span>
								<h3 className="text-xl font-bold mb-2 basis-1/4 lowercase">Fall 2023</h3>
							</div>
						</a>
					</div >

					<div className="mb-6">
						<a href="/wnba" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
							<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
								<h3 className="text-xl font-bold mb-2 lowercase">WNBA Prediction</h3>
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Basketball">🏀</span>
								<h3 className="text-xl font-bold mb-2 basis-1/4 lowercase">Fall 2023</h3>
							</div>
						</a>
					</div>
				</div >

				<h3 className="text-3xl font-bold mb-4 basis-1/4 text-red-500 text-center">under construction</h3>

				<div className="flex flex-row justify-evenly">
					<div className="mb-6">
						<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
							<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
								<h3 className="text-xl font-bold mb-2 lowercase">Network Anamoly Detector</h3>
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Credit Card">💳</span>
								<h3 className="text-xl font-bold mb-2 basis-1/4 lowercase">Summer 2023</h3>
							</div>
						</a>
					</div>

					<div className="mb-6">
						<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
							<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
								<h3 className="text-xl font-bold mb-2 lowercase">Coursewise</h3>
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Blue Book">📘</span>
								<h3 className="text-xl font-bold mb-2 basis-1/4 lowercase">Spring 2023</h3>
							</div>
						</a>
					</div>

					<div className="mb-6">
						<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
							<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
								<h3 className="text-xl font-bold mb-2 lowercase">Visualizing Society</h3>
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Round Pushpin">📍</span>
								<h3 className="text-xl font-bold mb-2 basis-1/4 lowercase">Fall 2022</h3>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div >


	);
}

export default Projects;
