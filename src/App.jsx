import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/cube-alt-2-svgrepo-com.svg'
import './App.css'
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="container mx-auto p-4">

			<header className="header mb-8 p-2 mx-auto my-4 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
				<div className="bg-white p-5 rounded-lg">
					<h1 className="text-4xl font-bold">Mel Avina-Beltran</h1>
					<ul className="flex justify-between mt-3 font-bold">
						<li>
							<span role="img" aria-label="Location">
								🗺️
							</span> Los Angeles, CA
						</li>
						<li>
							<span role="img" aria-label="Email">
								📫
							</span> melavinabeltran@gmail.com</li>
						<li><a href="https://github.com/mavina15"
							className="text-black" target="_blank" rel="noopener noreferrer">
							<span role="img" aria-label="Github">
								🗄️
							</span> github: mavina15</a></li>
						<li><a href="https://linkedin.com/in/mavinabeltran"
							className="text-black" target="_blank" rel="noopener noreferrer">
							<span role="img" aria-label="LinkedIn">
								🏢
							</span> linkedin: mavinabeltran</a></li>
					</ul>
				</div>
			</header>

			<section className="education-section">
				<h2 class="text-3xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r 
				bg-clip-text text-transparent">Education</h2>
				<div className="mb-6 flex justify-between items-start">
					<div className="text-left">
						<h3 className="text-xl font-bold mb-2">UNIVERSITY OF CALIFORNIA, DAVIS</h3>
						<p className="text-lg mb-1">B.S. in Applied Mathematics</p>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2">December 2023</h3>
					</div>
				</div>
				<div className="mb-6 flex justify-between items-start">
					<div className="text-left">
						<h3 className="text-xl font-bold mb-2">SANTA MONICA COLLEGE</h3>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2">June 2019</h3>
					</div>
				</div>
				<div className="flex flex-row">
					<p className="text-lg mb-1 italic font-bold basis-1/3 text-left">Relevant Coursework:</p>
					<p className="text-sm text-gray-500 mb-4 basis-2/3">
						Introduction to Programming, Introduction to Data Structures, Introduction to Programming and Microcontrollers,
						Human-Computer Interaction, Introduction to Artificial Intelligence, Theory of Computation, Visualizing Society
						with Data, Optimization, Numerical Analysis, Applied Linear Algebra, Modern Algebra, Probability, Ordinary
						Differential Equations, Real Analysis, Complex Analysis
					</p>
				</div>
			</section>

			<section className="project-section">
				<h2 class="text-3xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r 
				bg-clip-text text-transparent">Projects</h2>

				<div className="flex flex-row justify-evenly">
					<div className="mb-6">
						<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
							<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
								<h3 className="text-xl font-bold mb-2">Music Generation</h3>
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Musical Score">🎼</span>
								<h3 className="text-xl font-bold mb-2 basis-1/4">Winter 2024</h3>
							</div>
						</a>
					</div>

					<div className="mb-6">
						<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
							<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
								<h3 className="text-xl font-bold mb-2">Breast Cancer Classification</h3>
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Hospital">🏥</span>
								<h3 className="text-xl font-bold mb-2 basis-1/4">Fall 2023</h3>
							</div>
						</a>
					</div>

					<div className="mb-6">
						<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
							<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
								<h3 className="text-xl font-bold mb-2">WNBA Prediction</h3>
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Basketball">🏀</span>
								<h3 className="text-xl font-bold mb-2 basis-1/4">Fall 2023</h3>
							</div>
						</a>
					</div>
				</div>

				<div className="flex flex-row justify-evenly">
					<div className="mb-6">
						<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
							<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
								<h3 className="text-xl font-bold mb-2">Network Anamoly Detector</h3>
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Credit Card">💳</span>
								<h3 className="text-xl font-bold mb-2 basis-1/4">Summer 2023</h3>
							</div>
						</a>
					</div>

					<div className="mb-6">
						<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
							<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
								<h3 className="text-xl font-bold mb-2">Coursewise</h3>
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Blue Book">📘</span>
								<h3 className="text-xl font-bold mb-2 basis-1/4">Spring 2023</h3>
							</div>
						</a>
					</div>

					<div className="mb-6">
						<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
							<div className="flex flex-col items-center"> {/* Flex container to align items horizontally */}
								<h3 className="text-xl font-bold mb-2">Visualizing Society</h3>
								<span className="text-5xl mb-2 mx-2" role="img" aria-label="Round Pushpin">📍</span>
								<h3 className="text-xl font-bold mb-2 basis-1/4">Fall 2022</h3>
							</div>
						</a>
					</div>
				</div>


			</section>

			<section className="project-section">
				<h2 class="text-3xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r 
				bg-clip-text text-transparent">Projects</h2>

				<div className="mb-6 flex justify-between items-start">
					<div className="text-left basis-3/4">
						<h3 className="text-xl font-bold mb-2">Machine Learning Music Generation @ <a href="https://ucdlafamilia.com/" target="_blank" class="bg-gradient-to-r
							 from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom">AISC</a></h3>
						<p className="text-lg mb-1">This project utilizes a Long Short-Term Memory (LSTM) neural network to
							generate new musical sequences based on a dataset of MIDI files. The model is trained to predict the
							pitch, step, and duration of the next note in a sequence. The training data is sourced from the MAESTRO
							dataset, and the generated output is saved as a MIDI file.</p>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2 basis-1/4">Winter 2024</h3>
					</div>
				</div>

			</section>

			<section className="experience-section">
				<h2 class="text-3xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r 
				bg-clip-text text-transparent">Experience</h2>
				<div className="mb-6 flex justify-between items-start">
					<div className="text-left">
						<h3 className="text-xl font-bold mb-2">Junior Developer and Project Manager @ <a href="https://www.codelabdavis.com/" target="_blank" class="bg-gradient-to-r
							 from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom">CODELAB</a></h3>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2">Winter - Spring 2023</h3>
					</div>
				</div>

				<div className="mb-6 flex justify-between items-start">
					<div className="text-left">
						<h3 className="text-xl font-bold mb-2">Junior Developer @ <a href="https://www.math.ucdavis.edu/" target="_blank" class="bg-gradient-to-r
							 from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom">UC DAVIS MATH DEPARTMENT</a></h3>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2">Winter - Spring 2022</h3>
					</div>
				</div>
			</section>

			<section className="leadership-section">
				<h2 class="text-3xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r 
				bg-clip-text text-transparent">Leadership</h2>
				<div className="mb-6 flex justify-between items-start">
					<div className="text-left">
						<h3 className="text-xl font-bold mb-2">PRESIDENT @ <a href="https://ucdlafamilia.com/" target="_blank" class="bg-gradient-to-r
							 from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom">LA FAMILIA DE UC DAVIS</a></h3>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2">2020 - 2023</h3>
					</div>
				</div>
				<div className="mb-6 flex justify-between items-start">
					<div className="text-left">
						<h3 className="text-xl font-bold mb-2">EXTERNAL ACADEMIC CHAIR @ <a href="https://calessatucd.wixsite.com/calessatucd" target="_blank" class="bg-gradient-to-r
							 from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom">CALESS</a></h3>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2">Fall 2020 - Spring 2021</h3>
					</div>
				</div>
			</section>

		</div>
	)
}

export default App
