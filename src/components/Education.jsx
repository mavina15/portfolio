
const Education = () => {
	return (
		<section id="education" class="container mx-auto p-4 max-w-5xl">
			<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
				<div class="max-w-screen-md mb-8 lg:mb-16">
					<h2 class="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 ">education</h2>
				</div>

				<div class="grid gap-8 lg:grid-cols-2">
					<article class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl mt-2">
						<div class="md:flex">
							<div class="md:shrink-0">
								<img class="h-48 w-full object-cover md:h-full md:w-48" src="./img/administration-uc-davis.jpg" alt="University of California, Davis" />
							</div>
							<div class="p-8">
								<div class="tracking-wide text-2xl text-indigo-500 font-bold lowercase">University of California, Davis</div>
								<a href="#" class="block mt-1 text-lg leading-tight font-bold text-black hover:underline lowercase">December 2023</a>
								<p class="mt-2 mb-2 text-slate-500 text-xl lowercase">B.S. in Applied Mathematics</p>
							</div>
						</div>
					</article>

					<article class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl mt-2">
						<div class="md:flex">
							<div class="md:shrink-0">
								<img class="h-48 w-full object-cover md:h-full md:w-48" src="./img/smc.jpg" alt="Santa Monica College" />
							</div>
							<div class="p-8">
								<div class="tracking-wide text-2xl text-indigo-500 font-bold lowercase">Santa Monica College</div>
								<a href="#" class="block mt-1 text-lg leading-tight font-bold text-black hover:underline lowercase">June 2019</a>
								<p class="mt-2 mb-2 text-slate-500 text-xl lowercase">A.S. in General Sciences</p>
							</div>
						</div>
					</article>

				</div>
				<div class="mb-4 py-10 mx-auto max-w-4xl">
					<div class="flex flex-row">
						<p class="text-3xl mb-4 font-bold w-1/4 text-left lowercase">Relevant Coursework:</p>
						<p class="text-xl text-gray-500 mb-2 w-3/4">
							Introduction to Programming, Introduction to Data Structures, Introduction to Programming and Microcontrollers,
							Human-Computer Interaction, Introduction to Artificial Intelligence, Theory of Computation, Visualizing Society
							with Data, Optimization, Numerical Analysis, Applied Linear Algebra, Modern Algebra, Probability, Ordinary
							Differential Equations, Real Analysis, Complex Analysis
						</p>
					</div>
				</div>

			</div>

		</section >

	);
};

export default Education;