import React from 'react';
import Nav from './Nav';
import profilePic from './img/memoji02.png'; // Adjust the path based on your project structure
import mailIcon from './img/mail-app.png'; // Replace with actual path to mail icon
import githubIcon from './img/github-app.png'; // Replace with actual path to GitHub icon
import linkedinIcon from './img/linkedin-app.png'; // Replace with ac
import rocCurve from './img/roccurve.png'; // Replace with ac
import wnbaPredictionImage from './img/2022-WNBA-PREVIEW-4x3-1.webp'





const ParallaxSection = () => {
	return (
		<div className="relative overflow-hidden min-h-screen">

			<Nav />

			{/* Home Section */}
			<section id="home" className="bg-white bg-opacity-80 py-20 px-4 m-20">
				<div className="container mx-auto max-w-4xl">
					<div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg p-8">
						{/* Profile Image */}
						<div className="relative mb-6">
							<div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-tr from-blue-400 to-purple-500 flex items-center justify-center">
								<img className="w-28 h-28 object-cover" src={profilePic} alt="profile image" style={{ marginBottom: '-0.90rem' }} />
							</div>
							{/* Adjust position using negative margin */}
						</div>
						<h1 className="text-4xl font-bold text-gray-900 mb-2">Mel Avina-Beltran</h1>
						<p className="text-xl font-semibold text-purple-500 mb-4">Data Scientist + Software Engineer</p>
						<p className="text-center text-lg text-gray-700 mb-6">Passionate about leveraging technology to solve real-world problems.</p>
						{/* Contact Links */}
						<div className="flex space-x-4 mb-6">
							<a href="mailto:your.email@example.com" className="hover:text-gray-800">
								<img src={mailIcon} alt="Mail Icon" className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110" />
							</a>
							<a href="https://github.com/mavina15" className="hover:text-gray-800">
								<img src={githubIcon} alt="Github Icon" className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110" />
							</a>
							<a href="https://linkedin.com/in/mavinabeltran" className="hover:text-gray-800">
								<img src={linkedinIcon} alt="LinkedIn Icon" className="w-8 h-8 rounded-lg transition-transform transform hover:scale-110" />
							</a>
						</div>
						{/* Download Resume Button */}
						<a href="/path/to/your/resume.pdf" download className="inline-block mt-4 bg-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-400 transition-colors font-semibold">
							Download Resume
						</a>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="bg-white bg-opacity-80 py-20 px-4 m-20">
				<div className="container mx-auto max-w-7xl">
					<div className="col-span-2 bg-white border border-gray-200 rounded-lg shadow-lg p-6">
						<div className="flex items-center mb-2">
							<svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
							</svg>
							<div className="ml-3 text-xl font-semibold text-yellow-600">About</div>
						</div>
						<p className="text-lg text-center text-gray-400 mb-4">2024</p>
						<ul className="text-black-700 list-none list-inside mb-4">
							<li className="flex items-center mb-2">
								<svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM8.942 14.678l-4.55-4.55a.646.646 0 0 1 .914-.914l3.252 3.253 7.114-7.113a.646.646 0 0 1 .914.914l-7.77 7.77a.646.646 0 0 1-.914 0z" />
								</svg>
								<span className="font-semibold text-2xl ml-2">🐮 B.S. Applied Mathematics, UC Davis</span>
							</li>
							<li className="flex items-center mb-2">
								<svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM8.942 14.678l-4.55-4.55a.646.646 0 0 1 .914-.914l3.252 3.253 7.114-7.113a.646.646 0 0 1 .914.914l-7.77 7.77a.646.646 0 0 1-.914 0z" />
								</svg>
								<span className="font-semibold text-2xl ml-2">🏴‍☠️ A.S. General Science, Santa Monica College</span>
							</li>
						</ul>
						<h2 className="underline text-2xl font-semibold mb-2">Projects</h2>
						<p className="text-lg mb-2">🏀 WNBA Matrix</p>
						<p className="text-lg mb-4">🩻 Breast Cancer Classification</p>
						<h2 className="underline text-2xl font-semibold mb-2">Leadership</h2>
						<p className="text-lg mb-2">🌈 President of La Familia de UC Davis</p>
						<p className="text-lg mb-2">⚛️ Academic Officer of CALESS (the Chicanx and Latinx Scientists and Engineers Society)</p>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="bg-white bg-opacity-80 py-20 px-4 m-20">
				<div className="container mx-auto max-w-7xl">
					<div className="col-span-2 bg-white border border-gray-200 rounded-lg shadow-lg p-6">
						<div className="flex items-center m-2">
							<svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
							</svg>
							<div className="ml-3 text-xl font-semibold text-yellow-600">Projects</div>
						</div>
						<p className="text-lg text-center text-gray-400 mb-4">2024</p>
						<div class="bg-white p-6 flex flex-wrap justify-evenly">
							<div class="w-full md:w-3/5 text-balance">
								<h2 class="underline text-2xl font-semibold mb-4">🏀 WNBA Prediction</h2>
								<a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" target="_blank">Live Demo</a>
								<p class="text-gray-700 my-4">Implemented a predictive modeling project for WNBA game outcomes using Python and machine learning techniques. The project involved data cleaning, feature selection, and model training to predict the winner of basketball games. The model achieved an accuracy of approximately 70.4%.</p>

								<div class="mb-4">
									<h3 class="font-semibold">Tech Used:</h3>
									<p class="text-gray-700">Python, Pandas, Scikit-learn</p>
								</div>

								<div class="mb-4">
									<h3 class="font-semibold">Steps:</h3>
									<p class="text-gray-700"><strong>Cleaning Data:</strong> Imported and cleaned schedule and advanced statistics data. Merged datasets and added a column to indicate the home team’s win or loss.</p>
									<p class="text-gray-700"><strong>Determining Predictors:</strong> Used Sequential Feature Selector to identify the top 10 predictors for the model.</p>
									<p class="text-gray-700"><strong>Creating and Testing Model:</strong> Implemented a logistic regression model. Utilized Monte Carlo simulation for model evaluation, achieving an accuracy of 70.4%.</p>
									<p class="text-gray-700"><strong>Predicting Finals:</strong> Predicted the outcome of a specific WNBA final matchup between the Las Vegas Aces and New York Liberty.</p>
								</div>

								<div class="mb-4">
									<h3 class="font-semibold">Skills Demonstrated:</h3>
									<p class="text-gray-700">Data Cleaning, Feature Selection, Machine Learning (Logistic Regression), Model Evaluation and Testing</p>
								</div>

								<div class="mb-4">
									<h3 class="font-semibold">Achievements:</h3>
									<p class="text-gray-700">Successfully developed and tested a predictive model for WNBA game outcomes. Achieved a model accuracy of 70.4%.</p>
								</div>
							</div>

							<div class="w-full md:w-1/3 flex items-center justify-center md:justify-end mt-4 md:mt-0">
								<img src={wnbaPredictionImage} alt="WNBA Prediction Visualization" class="w-full h-auto rounded-lg shadow-md object-cover" />
							</div>
						</div>

						<div class="bg-white p-6 flex flex-wrap justify-evenly">
							<div class="w-full md:w-3/5 text-balance">
								<h2 class="underline text-2xl font-semibold mb-4">🩻 Breast Cancer Classification</h2>
								<a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" target="_blank">Live Demo</a>
								<p class="text-gray-700 my-4">Implemented various machine learning models to classify breast cancer tumors as malignant or benign using the Breast Cancer Wisconsin dataset. The project involved data preprocessing, model implementation, and extensive evaluation to achieve high accuracy.</p>

								<div class="mb-4">
									<h3 class="font-semibold">Tech Used:</h3>
									<p class="text-gray-700">Python, Numpy, Pandas, Matplotlib, Scikit-learn, XGBoost</p>
								</div>

								<div class="mb-4">
									<h3 class="font-semibold">Models Implemented and Compared:</h3>
									<p class="text-gray-700">Logistic Regression, K-Nearest Neighbors, Support Vector Machine, Decision Tree, Random Forest, Gradient Boosting, Naive Bayes, Neural Network (MLP Classifier), AdaBoost, XGBoost</p>
								</div>

								<div class="mb-4">
									<h3 class="font-semibold">Model Evaluation and Results:</h3>
									<p class="text-gray-700">Conducted thorough evaluation using metrics like confusion matrix, precision, recall, F1-score, and AUC-ROC. Visualized model performance through ROC curves and Precision-Recall curves.</p>
									<p class="text-gray-700 font-bold">Outcome: Achieved high accuracy and AUC scores across multiple models, with logistic regression achieving 98% accuracy.</p>
								</div>

								<div class="mb-4">
									<h3 class="font-semibold">Challenges and Learnings:</h3>
									<p class="text-gray-700">Throughout the project, I faced challenges such as optimizing model hyperparameters and dealing with class imbalance. These challenges helped me enhance my problem-solving skills and deepen my understanding of machine learning concepts.</p>
								</div>

								<div class="mb-4">
									<h3 class="font-semibold">Skills Demonstrated:</h3>
									<p class="text-gray-700">Machine Learning, Data Analysis, Model Evaluation, Python Programming</p>
								</div>
							</div>

							<div class="w-full md:w-1/3 flex items-center justify-center md:justify-end mt-4 md:mt-0">
								<img src={rocCurve} alt="ROC Curve" class="w-full h-auto object-cover" />
							</div>
						</div>
					</div>
				</div>
			</section>

		</div >
	);
};

export default ParallaxSection;




