import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Bike = () => {

	const CodeString = `import seaborn as sns
%matplotlib inline

sns.pairplot(df, x_vars=['Hour', 'Temperature(°C)', 'Humidity(%)', 
						 'Wind speed (m/s)','Visibility (10m)'])`;

	return (

		<div id="bike" class="container mx-auto my-auto p-4 max-w-5xl">
			<div class="mx-auto max-w-2xl p-8">
				<span class="text-5xl mb-2 mx-2" role="img" aria-label="Bicycle">🚲</span>
				<h1 class="text-3xl font-bold mb-4">Seoul Bike Data</h1>
				<h2 class="text-xl font-semibold mb-4">MATH 167: Applied Linear Algebra Final Project</h2>
				<p class="mb-4">My partner and I began by selecting the Kaggle data set, titled: “Seoul Bike Sharing Demand Prediction: Predict the Bike Demand in specific day”. The parameters affecting demand are specific weather conditions including temperature, humidity, windspeed and more.</p>

				<div class="relative">
					<img src="./img/seoulbike.jpg" alt="breast cancer image" class="h-48 w-full object-cover rounded-md object-center" />
					<div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
					<div class="absolute inset-0 flex items-center justify-center">
						<h2 class="text-white text-3xl font-bold text-balance text-center">Goal: Predict the outcome of WNBA games using data analysis and machine learning techniques.</h2>
					</div>
				</div>

				<section>
					<h2 class="my-4 text-3xl font-extrabold">Part 1: Importing Libraries and Splitting Data</h2>
					<p class="mb-4 text-lg text-gray-500">Using Google Colab, I imported the following libraries: pandas, numpy, sklearn, matplotlib, and seaborn. To visualize the weather conditions, I used seaborn to print pairplots for each parameter and later assigned it to a variable that will hold the columns that represent the X data, while y will represent the number of bikes rented on a given day.</p>
					<p class="mb-4 text-lg text-gray-500">A Seaborn pairplot is a quick and easy way to become familiar with our new dataset. It plots pairwise relationships between variables within a dataset. And they allow us to visualize large datasets in a condensed format. </p>
					<p class="italic text-center font-bold">Figure 1: Seaborn Pairplots</p>
					<img class="w-90 h-90 p-1" src="./img/snspairplot.png" alt="Seaborn Pairplots" />
					<SyntaxHighlighter class="block bg-gray-900 text-white rounded-md p-4 relative" language="python" style={dracula}>
						{CodeString}
					</SyntaxHighlighter>
				</section>

				<section>
					<h2 class="text-3xl font-extrabold">Part 2: Linear Regression Model</h2>
					<div class="justify-evenly">
						<div class="flex flex-col">
							<p class="my-4 text-lg text-gray-500 text-left">The data is then split into two subgroups to use for model training and testing. X train shape is (6570, 5), while y train shape is (6570, ). X test shape is (2190, 5), while y train shape is (2190, ).</p>
						</div>
						<div class="flex flex-col w-1/2 m-4">
							<p class="italic text-center font-bold">Figure 2: Linear Regression Model</p>
							<div class="flex flex-row">
								<img class="w-100 h-100 p-1" src="./img/sbd1.png" alt="Seaborn Pairplots" />
								<img class="w-100 h-100 p-1" src="./img/sbd2.png" alt="Residual Pairplots" />
							</div>
						</div>
					</div>
				</section>

				<section>
					<h2 class="text-3xl font-extrabold">Part 3: Decision Tree Regressor Model</h2>
					<p class="mt-4 text-lg text-gray-500">Now we can utilize a linear regression model to compare the predicted and actual values of bike rentals based on the parameters. </p>
					<div class="flex flex-col w-1/2 m-4">
						<p class="italic text-center font-bold">Figure 3: Decision Tree Regression Model</p>
						<div class="flex flex-row">
							<img class="w-100 h-100 p-1" src="./img/sbd1.png" alt="Seaborn Pairplots" />
							<img class="w-100 h-100 p-1" src="./img/sbd2.png" alt="Residual Pairplots" />
						</div>
					</div>
				</section>
			</div>
		</div>

	);
};

export default Bike;
