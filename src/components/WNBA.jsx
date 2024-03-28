import React from "react";

const WNBA = () => {
	return (

		<div id="wnba" class="container mx-auto my-auto p-4 max-w-5xl">
			<div class="mx-auto max-w-2xl p-8">
				<span class="text-5xl mb-2 mx-2" role="img" aria-label="Basketball">🏀</span>
				<h1 class="text-3xl font-bold mb-4">WNBA Prediction</h1>
				<p class="mb-4">
					In the Fall of 2023, I attended a collaboration workshop between Aggie
					Analytics and the Society of Women Engineers at UC Davis. This event
					sought to introduce computer science, engineering and other
					underrepresented student groups to data science projects through female
					sports events.
				</p>

				<div class="relative">
					<img src="./img/wnba.png" alt="wnba image" class="h-48 w-full object-cover rounded-md object-right-top" />
					<div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
					<div class="absolute inset-0 flex items-center justify-center">
						<h2 class="text-white text-3xl font-bold text-balance text-center">Goal: Predict the outcome of WNBA games using data analysis and machine learning techniques.</h2>
					</div>
				</div>

				<h2 class="text-xl font-bold my-2">Technologies used:</h2>
				<ul class="list-disc pl-8 mb-4">
					<li>Python</li>
					<li>Libraries: Pandas, Scikit-Learn</li>
				</ul>

				<section>
					<h2 class="my-4 text-2xl font-extrabold">Part 1: Data Cleaning</h2>
					<p class="mb-4">There are two files we begin to analyze for upkeep, “reg_season.csv” and “advanced_stats.csv”. The first csv file contains schedule information for the teams, while the latter contains more specific information like W, L, TS percentage and more.</p>
					<p class="mb-4">For both the schedule and advanced stats datasets, we must remove columns that are not needed, ie. x, y and z. In the second dataset, “advanced_stats.csv,” we remove NaN columns. Now we can merge and organize the two datasets according to their team names. Finally to show a home team won, we must add a column accordingly.</p>
				</section>

				<section>
					<h2 class="my-4 text-2xl font-extrabold">Part 2: Feature Selection</h2>
					<p class="mb-4">Moving on to choosing successful predictors for the model, we can utilize a ridge regression classifier and sequential feature selector. This will help us select the 10 best features from the stats. Hence we can continue to identify the selected predictor for the model, ie. x, y and z.</p>
				</section>

				<section>
					<h2 class="my-4 text-2xl font-extrabold">Part 3: Model Creation and Evaluation</h2>
					<p class="mb-4">A successful dataset clean up and feature selection builds the foundation for an accurate and clear model to be built. To build and test the model, we split the data into a training and testing subset. Next, we use Logistic Regression to train the model. This allows us to check the accuracy of the model using the Monte Carlo cross-validation method.</p>
					<p class="mb-4">After our model is created, we test it, achieving <span class="font-bold">70.38%</span> accuracy for meeting the goal in predicting WNBA game outcomes.</p>
				</section>

				<section>
					<h2 class="my-4 text-2xl font-extrabold">Part 4: Predicting Finals</h2>
					<p class="mb-4">Using the model, we can continue testing outcomes in predicting the final game matchups. To do this successfully, we need to remove games where the Las Vegas Aces and New York Liberty play one another. Then we select a final game between the Las Vegas Aces, where they are the home team, against the visiting team, New York Liberty. This allows us to continue training the model using the rest of the dataset to predict the outcome of the final game.</p>
				</section>

				<section>
					<h2 class="my-4 text-2xl font-extrabold">Part 5: Conclusion</h2>
					<p class="mb-4">For an introduction workshop, this was hosted and demonstrated effectively, with many underrepresented students showing visible excitement and focus. This workshop gave me the confidence and initial interest to analyze sports data and apply my previous skillset to adding usability and application developments in future work. In the coming weeks, I intend to build a dashboard for this dataset that allows users to choose teams to pit against each other and predict the outcome of a game. This project would allows me to build my web application skills with the technologies of Flask.</p>
				</section>

				<p class="mb-4">References: Aggie Analytics, SWE</p>
				<p class="mb-4">Code/Github: <a href="https://github.com/mavina15/WNBA_Predict" class="text-blue-600">https://github.com/mavina15/WNBA_Predict</a></p>
			</div>
		</div>

	);
};

export default WNBA;
