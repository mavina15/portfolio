import React from "react";

const Education = () => {

	return (
		<div id="education" className="container mx-auto p-4 max-w-5xl">

			<section class="bg-white">
				<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
					<div class="max-w-screen-md mb-4 lg:mb-8">
						<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">education</h2>
					</div>

					<div class="mb-5 md:mb-8">
						<h3 class="text-xl font-bold mb-2 lowercase">Relevant Coursework</h3>
						<p class="mx-auto max-w-screen-lg text-gray-500 md:text-md">Introduction to Programming, Introduction to Data Structures, Introduction to Programming and Microcontrollers, Human-Computer Interaction, Introduction to Artificial Intelligence, Theory of Computation, Visualizing Society with Data, Optimization, Numerical Analysis, Applied Linear Algebra, Modern Algebra, Probability, Ordinary Differential Equations, Real Analysis, Complex Analysis</p>
					</div>

					<div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">

						<div class="flex flex-col overflow-hidden rounded-lg border bg-white">
							<a href="https://www.ucdavis.edu/" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
								<img src="./img/Mrak3.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
							</a>

							<div class="flex flex-1 flex-col p-4 sm:p-6">
								<h2 class="mb-2 text-2xl font-extrabold text-gray-800">
									<a href="https://www.ucdavis.edu/" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">university of california, davis</a>
								</h2>
								<h4 class="mb-2 text-xl font-bold text-pink-600">
									<a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">december 2023</a>
								</h4>
								<p class="mb-2 text-gray-500">b.s. applied mathematics</p>
							</div>
						</div>



						<div class="flex flex-col overflow-hidden rounded-lg border bg-white">
							<a href="https://www.smc.edu/" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
								<img src="./img/smc.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
							</a>

							<div class="flex flex-1 flex-col p-4 sm:p-6">
								<h2 class="mb-2 text-2xl font-extrabold text-gray-800">
									<a href="https://www.smc.edu/" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">santa monica college</a>
								</h2>
								<h4 class="mb-2 text-xl font-bold text-pink-600">
									<a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">june 2019</a>
								</h4>
								<p class="mb-2 text-gray-500">a.s. general science</p>
							</div>
						</div>

					</div>
				</div>
			</section>
		</div>


	);
};

export default Education;