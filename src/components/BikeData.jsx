import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Bike = () => {

	const CodeString = `import seaborn as sns
%matplotlib inline

sns.pairplot(df, 
			 x_vars=['Hour', 
			 		 'Temperature(°C)', 
					 'Humidity(%)', 
			 		 'Wind speed (m/s)', 
					 'Visibility (10m)'])`;

	const CodeString1 = `from sklearn.linear_model import LinearRegression

linReg = LinearRegression()
linReg.fit(X_train, y_train)
	
print(linReg.intercept_)
print(linReg.coef_)
	
# Predict the values using the trained model
y_pred = linReg.predict(X_test)
	
# Calculate residuals
residuals = y_test - y_pred
	
# Plotting the actual vs. predicted values with trend line 
# and residuals
plt.scatter(y_test, y_pred, alpha=0.5, label='Data Points', 
			color='magenta')
plt.plot([min(y_test), max(y_test)], [min(y_test), 
		  max(y_test)], color='purple', linestyle='--', 
		  label='Trend Line')
plt.axhline(0, color='black', linewidth=0.5)  
# Add a horizontal line at y=0 for reference
plt.xlabel("Actual Rented Bike Count")
plt.ylabel("Predicted Rented Bike Count")
plt.title("Actual vs. Predicted Rented Bike Count", 
		   loc='left', weight='bold', fontsize=20)
plt.legend()
plt.show()

# Plotting the residuals
plt.scatter(y_test, residuals, alpha=0.5, color='magenta')
plt.axhline(0, color='black', linewidth=0.5)  
# Add a horizontal line at y=0 for reference
plt.xlabel("Actual Rented Bike Count")
plt.ylabel("Residuals")
plt.title("Residual Plot", loc='left', weight='bold', 
		   fontsize=20)
plt.show()`

	const CodeString2 = `from sklearn.tree import DecisionTreeRegressor

# Initialize and train the decision tree regression model
treeReg = DecisionTreeRegressor()
treeReg.fit(X_train, y_train)

# Predict the values using the trained model
y_pred_tree = treeReg.predict(X_test)

# Calculate residuals
residuals_tree = y_test - y_pred_tree

# Plotting the actual vs. predicted values with trend line and residuals
plt.scatter(y_test, y_pred_tree, alpha=0.5, label='Data Points', color='magenta')
plt.plot([min(y_test), max(y_test)], [min(y_test), max(y_test)], color='purple', linestyle='--', label='Trend Line')
plt.axhline(0, color='black', linewidth=0.5)  # Add a horizontal line at y=0 for reference
plt.xlabel("Actual Rented Bike Count")
plt.ylabel("Predicted Rented Bike Count")
plt.title("Actual vs. Predicted Rented Bike Count", loc='left', weight='bold', fontsize=20)
plt.legend()
plt.show()
plt.savefig('dtr1.png')

# Plotting the residuals
plt.scatter(y_test, residuals_tree, alpha=0.5, color='magenta')
plt.axhline(0, color='black', linewidth=0.5)  # Add a horizontal line at y=0 for reference
plt.xlabel("Actual Rented Bike Count")
plt.ylabel("Residuals")
plt.title("Residual Plot", loc='left', weight='bold', fontsize=20)
plt.show()
plt.savefig('dtr2.png')`

	return (

		<div id="bike" class="container mx-auto my-auto p-4 max-w-8xl">

			<section class="bg-white my-10">
				<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
					<div class="mr-auto place-self-center lg:col-span-7">
						<h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Seoul Bike Data</h1>
						<h3 class="text-xl font-semibold mb-8">MATH 167: Applied Linear Algebra Final Project</h3>
						<h2 class="max-w-xl my-6 text-3xl font-extrabold">Goal: Predict bike rental counts accurately based on Seoul bike sharing data.</h2>
						<p class="max-w-2xl mb-6 font-light text-gray-500 md:text-lg lg:text-xl">My partner and I began by selecting the Kaggle data set, titled: “Seoul Bike Sharing Demand Prediction: Predict the Bike Demand in specific day”. The parameters affecting demand are specific weather conditions including temperature, humidity, windspeed and more.</p>
					</div>
					<div class="lg:col-span-5 lg:flex lg:items-center">
						<img class="object-contain mx-auto lg:mx-0" src="./img/seoul bike.jpeg" alt="mockup" />
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
						<div class="code-block font-mono text-sm text-gray-800">
							<pre><code># pairplot <br></br>
								import seaborn as sns <br></br>
								%matplotlib inline <br></br>
								<br></br>

								sns.pairplot(bike_data, <br></br>
								x_vars=['Hour', <br></br>
								'Temperature(°C)', <br></br>
								'Humidity(%)', <br></br>
								'Wind speed (m/s)', <br></br>
								'Visibility (10m)'], <br></br>
								plot_kws=dict(color='magenta'), <br></br>
								diag_kws=dict(color='magenta')) <br></br>
								<br></br>
								plt.savefig('snspairplot.png')</code></pre>
						</div>

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
					<div class="grid grid-cols-2 gap-4 mt-8">
						<div class="code-block font-mono text-sm text-gray-800">
							<pre><code># pairplot <br></br>
								import seaborn as sns <br></br>
								%matplotlib inline <br></br>
								<br></br>

								sns.pairplot(bike_data, <br></br>
								x_vars=['Hour', <br></br>
								'Temperature(°C)', <br></br>
								'Humidity(%)', <br></br>
								'Wind speed (m/s)', <br></br>
								'Visibility (10m)'], <br></br>
								plot_kws=dict(color='magenta'), <br></br>
								diag_kws=dict(color='magenta')) <br></br>
								<br></br>
								plt.savefig('snspairplot.png')</code></pre>
						</div>
						<div class="flex flex-col">
							<img class="mt-4 w-full h-full lg:mt-10 rounded-lg" src="./img/sbd1.png" alt="office content 2" />
							<img class="mt-4 w-full h-full lg:mt-10 rounded-lg" src="./img/sbd2.png" alt="office content 2" />
						</div>
					</div>
				</div>
			</section>

			<section class="bg-white">
				<div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
					<div class="font-light text-gray-500 sm:text-lg">
						<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Decision Tree Regressor Model</h2>
						<p class="mb-4">Now we can utilize a linear regression model to compare the predicted and actual values of bike rentals based on the parameters.</p>
					</div>
					<div class="grid grid-cols-2 gap-4 mt-8">
						<div class="code-block font-mono text-sm text-gray-800">
							<pre><code># pairplot <br></br>
								import seaborn as sns <br></br>
								%matplotlib inline <br></br>
								<br></br>

								sns.pairplot(bike_data, <br></br>
								x_vars=['Hour', <br></br>
								'Temperature(°C)', <br></br>
								'Humidity(%)', <br></br>
								'Wind speed (m/s)', <br></br>
								'Visibility (10m)'], <br></br>
								plot_kws=dict(color='magenta'), <br></br>
								diag_kws=dict(color='magenta')) <br></br>
								<br></br>
								plt.savefig('snspairplot.png')</code></pre>
						</div>
						<div class="flex flex-col">
							<img class="mt-4 w-full h-full lg:mt-10 rounded-lg" src="./img/sbd1.png" alt="office content 2" />
							<img class="mt-4 w-full h-full lg:mt-10 rounded-lg" src="./img/sbd2.png" alt="office content 2" />
						</div>
					</div>
				</div>
			</section>


			<section>
				<h2 class="my-4 text-2xl font-extrabold">Part 2: Linear Regression Model</h2>
				<div class="flex flex-col">
					<p class="my-4 text-lg text-gray-500 text-left">The data is then split into two subgroups to use for model training and testing. X train shape is (6570, 5), while y train shape is (6570, ). X test shape is (2190, 5), while y train shape is (2190, ).</p>
				</div>
				<p class="italic text-center font-bold">Figure 2: Linear Regression Model</p>
				<div className="flex flex-row">
					<div class="flex flex-col">
						<img class="w-100 p-1" src="./img/sbd1.png" alt="Seaborn Pairplots" />
						<img class="w-100 p-1" src="./img/sbd2.png" alt="Residual Pairplots" />
					</div>
					<SyntaxHighlighter class="block bg-gray-900 text-white rounded-md p-4 relative" language="python" style={dracula}>
						{CodeString1}
					</SyntaxHighlighter>
				</div>
			</section>

			<section>
				<h2 class="my-4 text-2xl font-extrabold">Part 3: Decision Tree Regressor Model</h2>
				<p class="mt-4 text-lg text-gray-500">Now we can utilize a linear regression model to compare the predicted and actual values of bike rentals based on the parameters. </p>
				<p class="italic text-center font-bold">Figure 3: Decision Tree Regression Model</p>
				<div class='flex flex-row'>
					<div class="flex flex-col">
						<img class="w-100 p-1" src="./img/sbd1.png" alt="Seaborn Pairplots" />
						<img class="w-100 p-1" src="./img/sbd2.png" alt="Residual Pairplots" />
					</div>
					<SyntaxHighlighter class="block bg-gray-900 text-white rounded-md p-4 relative" language="python" style={dracula}>
						{CodeString2}
					</SyntaxHighlighter>
				</div>
			</section>
		</div >

	);
};

export default Bike;
