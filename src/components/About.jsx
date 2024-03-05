import React from "react";

const About = () => {
	return (
		<div id="about" className="container mx-auto p-4 max-w-5xl">
			<div className="mb-8 p-6 mx-auto my-20 rounded-xl bg-white border border-gray-200 shadow flex justify-evenly">
				<img class="w-40 h-40 p-1 rounded-full bg-pink-200" src="./memoji.png" alt="Bordered avatar" />
				<div class="ml-10">
					<h1 className="text-3xl font-bold mb-2 whitespace-nowrap">Thanks for checking out my portfolio!</h1>
					<h5 className="text-md"> Mel Avina-Beltran (he/him)</h5>
					<h5 className="text-md"> Data Scientist + Software Engineer</h5>
					<h5 className="text-md"> Always looking for the next cool and fun thing to do!</h5>
					<ul className=" mt-3 font-bold">
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
							<a href="https://github.com/mavina15" className="text-black" target="_blank" rel="noopener noreferrer">
								<span role="img" aria-label="Github">
									🗄️
								</span> github: mavina15
							</a>
						</li>
						<li>
							<a href="https://linkedin.com/in/mavinabeltran" className="text-black" target="_blank" rel="noopener noreferrer">
								<span role="img" aria-label="LinkedIn">
									🏢
								</span> linkedin: mavinabeltran
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div >
	);
};

export default About;
