import React from "react";

const Projects = () => {

	return (
		<div id="projects" className="container mx-auto p-4 max-w-5xl">

			<section class="bg-white">
				<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
					<div class="max-w-screen-md mb-8 lg:mb-16">
						<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">projects</h2>
					</div>
					<div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
						<div>
							<div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Bicycle">🚲</span>
							</div>
							<h3 class="mb-2 text-xl font-bold ">seoul bike data</h3>
							<p class="text-gray-500 ">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
							<a href="/bike" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
								Learn more
								<svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
							</a>
						</div>
						<div>
							<div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Hospital">🏥</span>
							</div>
							<h3 class="mb-2 text-xl font-bold ">breast cancer classification</h3>
							<p class="text-gray-500 ">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
							<a href="/cancer" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
								Learn more
								<svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
							</a>
						</div>
						<div>
							<div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Basketball">🏀</span>
							</div>
							<h3 class="mb-2 text-xl font-bold ">wnba prediction</h3>
							<p class="text-gray-500 ">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
							<a href="/wnba" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
								Learn more
								<svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
							</a>
						</div>
						<div>
							<div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Credit Card">💳</span>
							</div>
							<h3 class="mb-2 text-xl font-bold ">network anamoly detector</h3>
							<p class="text-gray-500 ">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
						</div>
						<div>
							<div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Blue Book">📘</span>
							</div>
							<h3 class="mb-2 text-xl font-bold ">coursewise</h3>
							<p class="text-gray-500 ">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</p>
						</div>
						<div>
							<div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Round Pushpin">📍</span>
							</div>
							<h3 class="mb-2 text-xl font-bold ">visualizing society</h3>
							<p class="text-gray-500 ">Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</p>
						</div>
					</div>
				</div>
			</section>
		</div>


	);
}

export default Projects;
