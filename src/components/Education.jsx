
const Education = () => {
	return (
		<div id="education" className="container mx-auto p-4 max-w-5xl">
			<h2 class="text-3xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r 
				bg-clip-text text-transparent">education</h2>

			<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl mt-8">
				<div class="md:flex">
					<div class="md:shrink-0">
						<img class="h-48 w-full object-cover md:h-full md:w-48" src="./img/Mrak3.jpg" />
					</div>
					<div class="p-8">
						<div class="uppercase tracking-wide text-md text-indigo-500 font-semibold uppercase">University of California, Davis</div>
						<a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">December 2023</a>
						<p class="mt-2 mb-2 text-slate-500">B.S. in Applied Mathematics</p>
					</div>
				</div>
			</div>

			<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl mt-8">
				<div class="md:flex">
					<div class="md:shrink-0">
						<img class="h-48 w-full object-cover md:h-full md:w-48" src="./img/smc.jpg" />
					</div>
					<div class="p-8">
						<div class="uppercase tracking-wide text-md text-indigo-500 font-semibold uppercase">Santa Monica College</div>
						<a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">June 2019</a>
						<p class="mt-2 mb-2 text-slate-500">A.S. in General Science</p>
					</div>
				</div>
			</div>


			<div className="mb-4 p-6 mx-auto">
				<div className="flex flex-row">
					<p className="text-lg mb-1 font-bold basis-1/3 text-left">Relevant Coursework:</p>
					<p className="text-sm text-gray-500 mb-2 basis-2/3">
						Introduction to Programming, Introduction to Data Structures, Introduction to Programming and Microcontrollers,
						Human-Computer Interaction, Introduction to Artificial Intelligence, Theory of Computation, Visualizing Society
						with Data, Optimization, Numerical Analysis, Applied Linear Algebra, Modern Algebra, Probability, Ordinary
						Differential Equations, Real Analysis, Complex Analysis
					</p>
				</div>
			</div>


		</div>



	);
};

export default Education;