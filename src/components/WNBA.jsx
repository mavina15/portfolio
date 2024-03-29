import React from "react";
import { a11yLight, anOldHope, solarizedLight } from "react-code-blocks";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const WNBA = () => {

	const CodeString = `import seaborn as sns
	%matplotlib inline
	
	sns.pairplot(df, x_vars=['Hour', 'Temperature(°C)', 'Humidity(%)', 'Wind speed (m/s)', 'Visibility (10m)'])`;

	return (

		<div id="wnba" class="container mx-auto my-auto p-4 max-w-8xl">

			<section class="bg-white my-12">
				<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
					<div class="mr-auto place-self-center lg:col-span-7">
						<h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">WNBA Prediction</h1>
						<h2 class="max-w-xl my-6 text-3xl font-extrabold">Goal: Develop and evaluate machine learning models to accurately classify breast tumors as malignant or benign using features extracted from digitized images, contributing to early detection and diagnosis of breast cancer for improved patient outcomes.</h2>
						<p class="max-w-2xl mb-6 font-light text-gray-500 md:text-lg lg:text-xl">During the weekend, the UC Davis AI Student Collective hosted a 4 hour workshop, to classify Breast Cancer using 10 machine learning techniques. They choose this subject as Breast Cancer plagues women worldwide. Early detection has shown to be vital in improving patient outcomes. Machine Learning Algorithms have the potential to build models to accurately predict the malignancy of a breast tumor using features extracted from images of breast mass. </p>
					</div>
					<div class="lg:col-span-5 lg:flex lg:items-center">
						<img class="rounded-xl shadow-md object-contain mx-auto lg:mx-0" src="./img/wnba.png" alt="mockup" />
					</div>
				</div>
			</section>

			<section class="bg-white">
				<div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
					<div class="font-light text-gray-500 sm:text-lg">
						<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Importing Libraries and Splitting Data</h2>
						<p class="mb-4">Using Google Colab, I imported the following libraries: pandas, numpy, sklearn, matplotlib, and seaborn. To visualize the weather conditions, I used seaborn to print pairplots for each parameter and later assigned it to a variable that will hold the columns that represent the X data, while y will represent the number of bikes rented on a given day.</p>
						<p>A Seaborn pairplot is a quick and easy way to become familiar with our new dataset. It plots pairwise relationships between variables within a dataset, allowing us to visualize large datasets in a condensed format.</p>
					</div>
					<div class="grid grid-cols-2 gap-4 mt-8">
						<SyntaxHighlighter className="rounded-lg h-1/3 p-4 text-xs bg-gray-100 text-gray-800 overflow-x-auto" style={dracula} wrapLongLines language="python">
							{CodeString}
						</SyntaxHighlighter>
						<img class="mt-4 w-full lg:mt-10 rounded-lg" src="./img/snspairplot.png" alt="office content 2" />
					</div>
				</div>
			</section >

			<section class="bg-white">
				<div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
					<div class="font-light text-gray-500 sm:text-lg">
						<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Linear Regression Model</h2>
						<p class="mb-4">The data is then split into two subgroups to use for model training and testing. X train shape is (6570, 5), while y train shape is (6570, ). X test shape is (2190, 5), while y train shape is (2190, ).</p>
					</div>
					<div class="grid gap-4 mt-8">
						<img class="mt-4 w-4/5 lg:mt-10 rounded-lg" src="./img/lr1.png" alt="office content 2" />
						<img class="mt-4 w-4/5 lg:mt-10 rounded-lg" src="./img/lr2.png" alt="office content 2" />
					</div>
				</div>
			</section>

			<section class="bg-white">
				<div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
					<div class="font-light text-gray-500 sm:text-lg">
						<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Decision Tree Regressor Model</h2>
						<p class="mb-4">Now we can utilize a linear regression model to compare the predicted and actual values of bike rentals based on the parameters.</p>

					</div>
					<div class="grid gap-4 mt-8">
						<img class="mt-4 w-5/6 lg:mt-10 rounded-lg" src="./img/dtr1.png" alt="office content 2" />
						<img class="mt-4 w-5/6 lg:mt-10 rounded-lg" src="./img/dtr2.png" alt="office content 2" />
					</div>
				</div>
			</section>
		</div>

	);
};

export default WNBA;
