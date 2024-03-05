
const Education = () => {
	return (
		<div id="education" className="container mx-auto p-4 max-w-5xl">
			<div className="mb-8 p-6 mx-auto my-20 rounded-xl bg-white border border-gray-200 shadow">

				<h2 class="text-3xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r 
				bg-clip-text text-transparent">education</h2>
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
			</div>
		</div>
	);
};

export default Education;