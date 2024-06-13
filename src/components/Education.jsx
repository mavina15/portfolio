import React from "react";

const Education = () => {

	return (
		<div id="education" className="container mx-auto p-4 max-w-5xl">

			<section class="bg-white">
				<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
					<div class="max-w-screen-md mb-4 lg:mb-8">
						<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Education</h2>
					</div>

					<div class="m-5 md:mb-8">
						<ol class="relative border-s-2 border-pink-600">
							<li class="mb-10 ms-8">
								<div class="absolute w-5 h-5 bg-pink-600 rounded-full mt-1.5 -start-2.5 border-2 border-white"></div>
								<time class="mb-1 text-md font-bold leading-none text-pink-600 lowercase">December 2023</time>
								<h3 class="text-2xl font-semibold text-gray-900 lowercase">University of California, Davis</h3>
								<p class="mb-4 text-base font-normal text-gray-500">Bachelor of Science in Applied Mathematics</p>
							</li>
							<li class="mb-10 ms-8">
								<div class="absolute w-5 h-5 bg-pink-600 rounded-full mt-1.5 -start-2.5 border-2 border-white"></div>
								<time class="mb-1 text-md font-bold leading-none text-pink-600 lowercase">June 2019</time>
								<h3 class="text-2xl font-semibold text-gray-900 lowercase">Santa Monica College</h3>
								<p class="text-base font-normal text-gray-500">Associate of Science in General Science</p>
							</li>
						</ol>
					</div>

					<div class="m-5 md:mb-8">
						<h3 class="text-xl font-bold mb-2 lowercase">Relevant Coursework</h3>
						<p class="mx-auto max-w-screen-lg text-gray-500 md:text-md">Introduction to Programming, Data Structures, Introduction to Artificial Intelligence, Theory of Computation, Human-Computer Interaction, Visualizing Society with Data, Optimization, Applied Linear Algebra, Probability, Applied Numerical Methods, Complex Variables, Modern Algebra, Real Analysis, Ordinary Differential Equations</p>
					</div>

				</div>
			</section>

		</div>


	);
};

export default Education;