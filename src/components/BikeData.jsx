import React from "react";

const Bike = () => {
	return (
		<div id="bike" className="container mx-auto p-4 max-w-5xl">
			<div className="mb-15 p-6 mx-auto my-20 rounded-xl bg-white border border-gray-200 shadow">
				<div className="my-5">
					<h1 className="mb-4 text-3xl font-extrabold leading-none text-gray-900 underline underline-offset-3 decoration-8 decoration-pink-600">Seoul Bike Data</h1>
					<h3 className="mb-4 text-xl font-extrabold leading-none text-gray-900">MATH 167: Applied Linear Algebra Final Project</h3>
					<p className="mb-3 text-gray-500">My partner and I began by selecting the Kaggle data set, titled: “Seoul Bike Sharing Demand Prediction: Predict the Bike Demand in specific day”. The parameters affecting demand are specific weather conditions including temperature, humidity, windspeed and more.</p>
					<p className="mb-3 text-gray-500">Using Google Colab, I imported the following libraries: pandas, numpy, sklearn, matplotlib, and seaborn. To visualize the weather conditions, I used seaborn to print pairplots for each parameter and later assigned it to a variable that will hold the columns that represent the X data, while y will represent the number of bikes rented on a given day.</p>

					<div className="bg-gray-900 rounded-md p-4">
						<pre className="line-numbers">
							<code className="language-python text-white">
								import seaborn as sns
								%matplotlib inline

								sns.pairplot(df, x_vars={['Hour', 'Temperature(°C)', 'Humidity(%)', 'Wind speed (m/s)', 'Visibility (10m)', 'Dew point temperature(°C)', 'Solar Radiation (MJ/m2)', 'Rainfall(mm)', 'Snowfall (cm)', 'Seasons', 'Holiday', 'Functioning Day']});
							</code>
						</pre>
					</div>

					<div class="flex flex-row">
						<p className="italic">Figure 1: Seaborn Pairplots</p>
						<img className="w-80 h-80 p-1" src="./img/bike linear regression.png" alt="Seaborn Pairplots" />

						<p className="italic">Figure 2: Residual Pairplots</p>
						<img className="w-80 h-80 p-1" src="public/img/bike model.png" alt="Residual Pairplots" />
					</div>

				</div>
			</div>
		</div>
	);
};

export default Bike;
