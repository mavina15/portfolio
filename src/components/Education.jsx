
const Education = () => {
	return (
		<div id="education" className="container mx-auto p-4 max-w-5xl ">
			<h2 class="text-3xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r 
				bg-clip-text text-transparent">education</h2>
			<div className="mb-4 p-6 mx-auto">

				<div className="flex flex-row">
					<p className="text-lg mb-1 italic font-bold basis-1/3 text-left">Relevant Coursework:</p>
					<p className="text-sm text-gray-500 mb-2 basis-2/3">
						Introduction to Programming, Introduction to Data Structures, Introduction to Programming and Microcontrollers,
						Human-Computer Interaction, Introduction to Artificial Intelligence, Theory of Computation, Visualizing Society
						with Data, Optimization, Numerical Analysis, Applied Linear Algebra, Modern Algebra, Probability, Ordinary
						Differential Equations, Real Analysis, Complex Analysis
					</p>
				</div>
			</div>

			<div className="flex flex-col">
				<div class="relative mb-8 ">
					<img src="./img/administration-uc-davis.jpg" alt="breast cancer image" class="h-48 w-full object-cover rounded-md object-center" />
					<div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
					<div class="absolute inset-0 flex items-center justify-start">
						<div class="ml-4">
							<a href="#">
								<h5 class="text-3xl font-bold mb-2 text-white whitespace-nowrap">UNIVERSITY OF CALIFORNIA, DAVIS</h5>
								<h3 class="text-xl font-bold mb-2 text-white">December 2023</h3>
								<h3 class="text-2xl font-bold mb-2 text-white">B.S. in Applied Mathematics</h3>
							</a>
						</div>
					</div>
				</div>

				<div class="relative  mb-8 ">
					<img src="./img/smc.jpg" alt="breast cancer image" class="h-48 w-full object-cover rounded-md object-center" />
					<div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
					<div class="absolute inset-0 flex items-center justify-start">
						<div class="ml-4">
							<a href="#">
								<h5 class="text-3xl font-bold mb-2 text-white whitespace-nowrap">SANTA MONICA COLLEGE</h5>
								<h3 class="text-xl font-bold mb-2 text-white">June 2019</h3>
							</a>
						</div>
					</div>
				</div>


			</div>



		</div>



	);
};

export default Education;