
const Projects = () => {

	return (
		<div className="container mx-auto p-4 max-w-5xl">
			<h2 class="text-3xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r 
				bg-clip-text text-transparent">Projects</h2>

			<div className="flex flex-row justify-evenly">
				<div className="mb-6">
					<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
						<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
							<h3 className="text-xl font-bold mb-2">Music Generation</h3>
							<span className="text-5xl mb-2 mx-2" role="img" aria-label="Musical Score">🎼</span>
							<h3 className="text-xl font-bold mb-2 basis-1/4">Winter 2024</h3>
						</div>
					</a>
				</div>

				<div className="mb-6">
					<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
						<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
							<h3 className="text-xl font-bold mb-2">Breast Cancer Classification</h3>
							<span className="text-5xl mb-2 mx-2" role="img" aria-label="Hospital">🏥</span>
							<h3 className="text-xl font-bold mb-2 basis-1/4">Fall 2023</h3>
						</div>
					</a>
				</div>

				<div className="mb-6">
					<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
						<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
							<h3 className="text-xl font-bold mb-2">WNBA Prediction</h3>
							<span className="text-5xl mb-2 mx-2" role="img" aria-label="Basketball">🏀</span>
							<h3 className="text-xl font-bold mb-2 basis-1/4">Fall 2023</h3>
						</div>
					</a>
				</div>
			</div>

			<div className="flex flex-row justify-evenly">
				<div className="mb-6">
					<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
						<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
							<h3 className="text-xl font-bold mb-2">Network Anamoly Detector</h3>
							<span className="text-5xl mb-2 mx-2" role="img" aria-label="Credit Card">💳</span>
							<h3 className="text-xl font-bold mb-2 basis-1/4">Summer 2023</h3>
						</div>
					</a>
				</div>

				<div className="mb-6">
					<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
						<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
							<h3 className="text-xl font-bold mb-2">Coursewise</h3>
							<span className="text-5xl mb-2 mx-2" role="img" aria-label="Blue Book">📘</span>
							<h3 className="text-xl font-bold mb-2 basis-1/4">Spring 2023</h3>
						</div>
					</a>
				</div>

				<div className="mb-6">
					<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
						<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
							<h3 className="text-xl font-bold mb-2">Visualizing Society</h3>
							<span className="text-5xl mb-2 mx-2" role="img" aria-label="Round Pushpin">📍</span>
							<h3 className="text-xl font-bold mb-2 basis-1/4">Fall 2022</h3>
						</div>
					</a>
				</div>
			</div>



		</div>




	);
}

export default Projects;
