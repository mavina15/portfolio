import React from "react";

const About = () => {
	return (

		<div id="about" className="container mx-auto p-4">
			<div className="mb-8 p-6 mx-auto my-20 rounded-xl bg-white border border-gray-200 shadow flex justify-evenly">

				<div>
					<div class="my-5">
						<h5 className="text-5xl font-bold"> Mel Avina-Beltran</h5>
						<h5 className="text-xl font-bold italic"> (he/him)</h5>
						<h5 className="text-3xl mt-3 font-bold text-pink-500"> Data Scientist + Software Engineer</h5>
					</div>

					<div class="my-5">
						<ul className="font-bold text-xl">
							<li>
								<span role="img" aria-label="Location">
									🗺️
								</span> Los Angeles, CA
							</li>
							<li>
								<span role="img" aria-label="Email">
									📫
								</span> melavinabeltran@gmail.com
							</li>
							<li>
								<a href="https://github.com/mavina15" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
									<span role="img" aria-label="Github">
										🗄️
									</span> github: mavina15
								</a>
							</li>
							<li>
								<a href="https://linkedin.com/in/mavinabeltran" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
									<span role="img" aria-label="LinkedIn">
										🏢
									</span> linkedin: mavinabeltran
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="my-5">
					<img className="w-60 h-60 p-1 rounded-full bg-pink-200" src="./img/memoji.png" alt="memoji" />
				</div>

			</div>
		</div >
	);
};

export default About;
