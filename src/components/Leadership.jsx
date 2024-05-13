import React from "react";

const Leadership = () => {
	return (
		<div id="leadership" className="container mx-auto p-4 max-w-5xl">

			<section class="bg-white">
				<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
					<div class="max-w-screen-md mb-4 lg:mb-8">
						<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">leadership</h2>
					</div>

					<div class="grid sm:grid-cols-2 lg:grid-cols-2 items-left gap-6">
						<a class="group flex gap-y-6 size-full hover:bg-gray-100 rounded-lg p-5 transition-all" href="https://ucdlafamilia.com/" target="_blank">
							<span className="flex-shrink-0 text-5xl mt-0.5 me-6" role="img" aria-label="Rainbow">🌈</span>
							<div>
								<div>
									<h4 class="text-lg block font-bold text-pink-500">winter - spring 2023</h4>
									<h3 class="text-md block font-bold text-gray-400">president</h3>
									<h2 class="text-2xl block font-bold text-gray-800 mb-3">@ la familia de uc davis</h2>
									<p class="text-gray-600">As the Senior Developer at UC Davis Codelab, I had the privilege of leading a dynamic team of 4 developers and designers through a transformative 15-week project.</p>
								</div>

								<p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
									Learn more
									<svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
								</p>
							</div>
						</a>

						<a class="group flex gap-y-6 size-full hover:bg-gray-100 rounded-lg p-5 transition-all" href="https://calessatucd.wixsite.com/calessatucd" target="_blank">
							<span className="flex-shrink-0 text-5xl mt-0.5 me-6" role="img" aria-label="Atom Symbol">⚛️</span>
							<div>
								<div>
									<h4 class="text-lg block font-bold text-pink-500">winter - spring 2022</h4>
									<h3 class="text-md block font-bold text-gray-400">external academic chair</h3>
									<h2 class="text-2xl block font-bold text-gray-800 mb-3">@ caless</h2>
									<p class="text-gray-600">As a Software Developer at UC Davis Math Department from January to June 2022, I took the lead in crafting a cutting-edge Google Sheets extension powered by Google Apps Script and JavaScript.</p>
								</div>

								<p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
									Learn more
									<svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
								</p>
							</div>
						</a>

					</div>
				</div>

			</section>

		</div>
	);
};

export default Leadership;
