import React from "react";

const About = () => {
	return (

		<div id="about" className="container mx-auto p-4 max-w-5xl" >
			<div className="mb-8 p-6 mx-auto my-20 rounded-xl bg-white border border-gray-200 shadow flex justify-evenly">
				<img className="w-40 h-40 p-1 rounded-full bg-pink-200" src="./img/memoji.png" alt="memoji" />
				<div class="ml-10">
					<h5 className="text-lg font-bold"> Mel Avina-Beltran (he/him)</h5>
					<h5 className="text-xl font-bold my-3 underline"> Data Scientist + Software Engineer</h5>

					<ul className=" mt-3 font-bold text-xl">
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
					<h1 className="text-3xl font-bold my-3 whitespace-nowrap">Thanks for checking out my portfolio!</h1>
				</div>
			</div>
		</div >
	);
};

export default About;
