import React from "react";

const Cancer = () => {
	return (

		<div id="cancer" className="container mx-auto my-auto p-4 max-w-5xl">
			<div className="mb-15 p-6 mx-auto my-20 rounded-xl bg-white border border-gray-200 shadow">
				<div className="my-5">
					<div className="my-8">
						<h1 className="mb-4 text-5xl font-extrabold leading-none text-gray-900 underline underline-offset-3 decoration-8 decoration-pink-600">Seoul Bike Data</h1>
						<h3 className="mb-4 text-3xl font-extrabold leading-none text-gray-900">MATH 167: Applied Linear Algebra Final Project</h3>
						<p className="mb-4 text-lg text-gray-500">My partner and I began by selecting the Kaggle data set, titled: “Seoul Bike Sharing Demand Prediction: Predict the Bike Demand in specific day”. The parameters affecting demand are specific weather conditions including temperature, humidity, windspeed and more.</p>
					</div>

					<div className="my-8">
						<h2 class="text-3xl font-extrabold">Part 1: Importing Libraries and Splitting Data</h2>
						<p className="mb-4 text-lg text-gray-500">Using Google Colab, I imported the following libraries: pandas, numpy, sklearn, matplotlib, and seaborn. To visualize the weather conditions, I used seaborn to print pairplots for each parameter and later assigned it to a variable that will hold the columns that represent the X data, while y will represent the number of bikes rented on a given day.</p>
						<p className="mb-4 text-lg text-gray-500">A Seaborn pairplot is a quick and easy way to become familiar with our new dataset. It plots pairwise relationships between variables within a dataset. And they allow us to visualize large datasets in a condensed format. </p>

						<div class="mb-4 relative">
							<code class="block bg-gray-900 text-white rounded-md p-4 relative language-python">
								import seaborn as sns <br></br>
								%matplotlib inline <br></br>
								<br></br>
								sns.pairplot(df, x_vars=['Hour', 'Temperature(°C)', 'Humidity(%)', 'Wind speed (m/s)', 'Visibility (10m)', 'Dew point temperature(°C)', 'Solar Radiation (MJ/m2)', 'Rainfall(mm)', 'Snowfall (cm)', 'Seasons', 'Holiday', 'Functioning Day'],)
							</code>
						</div>

						<div class="flex flex-col">
							<p className="italic text-center font-bold bg-yellow-200">Figure 1: Seaborn Pairplots</p>
							<img className="w-90 h-90 p-1" src="./img/featured col pairplot.png" alt="Seaborn Pairplots" />
						</div>
					</div>


					<div className="my-8">
						<h2 class="text-3xl font-extrabold">Part 2: Linear Regression Model</h2>
						<p className="mb-4 text-lg text-gray-500">The data is then split into two subgroups to use for model training and testing. X train shape is (6570, 5), while y train shape is (6570, ). X test shape is (2190, 5), while y train shape is (2190, ).</p>

						<div class="flex flex-row justify-evenly">
							<div>
								<p className="italic text-center font-bold bg-yellow-200">Figure 2: Seaborn Pairplots</p>
								<img className="w-100 h-100 p-1" src="./img/bike linear regression.png" alt="Seaborn Pairplots" />
							</div>

							<div>
								<p className="italic text-center font-bold bg-yellow-200">Figure 3: Residual Pairplots</p>
								<img className="w-100 h-100 p-1" src="./img/bike model.png" alt="Residual Pairplots" />
							</div>
						</div>
					</div>

					<div className="my-8">
						<h2 class="text-3xl font-extrabold">Part 3: Decision Tree Regressor Model</h2>
						<p className="mb-4 text-lg text-gray-500">Now we can utilize a linear regression model to compare the predicted and actual values of bike rentals based on the parameters. </p>
						<p className="italic text-center font-bold bg-yellow-200">Figure 4: Seaborn Pairplots</p>
						<img className="w-100 h-100 p-1" src="./img/bike decision tree regression model.png" alt="Residual Pairplots" />
					</div>

				</div>
			</div>
		</div>
	);
};

export default Cancer;
