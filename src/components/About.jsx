import React from "react";

const About = () => {
	return (
		<div id="about" className="container mx-auto p-4 max-w-7xl">

			<section className="bg-white">

				<div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-12">

					<div className="grid grid-cols-3 items-start lg:grid-cols-3 gap-8">
						<div className="col-span-1 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow pt-4">
							<div className="flex flex-col items-center pb-5">
								<img class="w-32 h-32 mr-6 rounded-full shadow-lg" src="./img/profile-pic.png" alt="profile image" />
								<h5 class="mb-1 text-2xl font-bold text-gray-900">Mel Avina-Beltran</h5>
								<span class="mb-2 text-xl font-bold text-pink-500 lowercase">Data Scientist + Software Engineer</span>

								<span className="text-xl font-bold text-gray-400 lowercase">Contact</span>
								<div className="flex mt-2 md:mt-4">
									<a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800">
										<svg className="w-8 h-8 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
											<path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
											<path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
										</svg>
									</a>
									<a href="https://github.com/mavina15" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800">
										<svg className="w-8 h-8 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
											<path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
										</svg>
									</a>
									<a href="https://linkedin.com/in/mavinabeltran" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800">
										<svg className="w-8 h-8 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
											<path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
											<path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
										</svg>
									</a>
								</div>
							</div>
						</div>

						<div className="col-span-2 bg-white p-4">
							<div className="text-lg text-pretty text-gray-600">
								<p className="font-bold lowercase">Data scientist and software engineer passionate about</p>
								<p className="font-bold text-black text-4xl lowercase">leveraging technology to solve real-world problems.</p>
							</div>
						</div>

					</div>

					<div class="py-3 lg:py-5 mx-auto items-start">
						<h4 class="mb-4 text-3xl font-extrabold text-gray-900 text-center">view my recent projects!</h4>
						<div class="grid sm:grid-cols-2 lg:grid-cols-3 items-left gap-6">
							<a class="group flex gap-y-6 size-full hover:bg-gray-100 rounded-lg p-5 transition-all" href="/bike">
								<span className="flex-shrink-0 text-5xl mt-0.5 me-6" role="img" aria-label="Bike">🚲</span>
								<div>
									<div>
										<h3 class="block font-bold text-gray-800">seoul bike data</h3>
										<p class="text-gray-600">Predict bike rental counts accurately based on Seoul bike sharing data.</p>
									</div>

									<p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
										Learn more
										<svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
									</p>
								</div>
							</a>

							<a class="group flex gap-y-6 size-full hover:bg-gray-100 rounded-lg p-5 transition-all" href="/cancer">
								<span className="flex-shrink-0 text-5xl mt-0.5 me-6" role="img" aria-label="Hospital">🏥</span>
								<div>
									<div>
										<h3 class="block font-bold text-gray-800">breast cancer classification</h3>
										<p class="text-gray-600">Develop and evaluate machine learning models to accurately classify breast tumors.</p>
									</div>

									<p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
										Learn more
										<svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
									</p>
								</div>
							</a>

							<a class="group flex gap-y-6 size-full hover:bg-gray-100 rounded-lg p-5 transition-all" href="/wnba">
								<span className="flex-shrink-0 text-5xl mt-0.5 me-6" role="img" aria-label="Basketball">🏀</span>
								<div>
									<div>
										<h3 class="block font-bold text-gray-800">wnba prediction</h3>
										<p class="text-gray-600">Predict the outcome of WNBA games using data analysis and machine learning techniques.</p>
									</div>

									<p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
										Learn more
										<svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
									</p>
								</div>
							</a>

						</div>
					</div>

				</div>
			</section>


		</div>
	);
};

export default About;

