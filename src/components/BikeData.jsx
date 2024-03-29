import React from "react";
import { a11yLight, anOldHope, solarizedLight } from "react-code-blocks";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Bike = () => {

	const CodeString = `import seaborn as sns
%matplotlib inline

sns.pairplot(df, x_vars=['Hour', 'Temperature(°C)', 'Humidity(%)', 'Wind speed (m/s)', 'Visibility (10m)'])`;

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
plt.axhline(0, color='black', linewidth=0.5)  
# Add a horizontal line at y=0 for reference
plt.xlabel("Actual Rented Bike Count")
plt.ylabel("Predicted Rented Bike Count")
plt.title("Actual vs. Predicted Rented Bike Count", loc='left', weight='bold', fontsize=20)
plt.legend()
plt.show()
plt.savefig('dtr1.png')

# Plotting the residuals
plt.scatter(y_test, residuals_tree, alpha=0.5, color='magenta')
plt.axhline(0, color='black', linewidth=0.5)  
# Add a horizontal line at y=0 for reference
plt.xlabel("Actual Rented Bike Count")
plt.ylabel("Residuals")
plt.title("Residual Plot", loc='left', weight='bold', fontsize=20)
plt.show()
plt.savefig('dtr2.png')`

	return (

		<div id="bike" class="container mx-auto my-auto p-4 max-w-8xl">

			<section class="bg-white my-12">
				<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
					<div class="mr-auto place-self-center lg:col-span-7">
						<h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Seoul Bike Data</h1>
						<h2 class="max-w-xl my-6 text-3xl font-extrabold">Goal: Predict bike rental counts accurately based on Seoul bike sharing data.</h2>
						<p class="max-w-2xl mb-6 font-light text-gray-500 md:text-lg lg:text-xl">The final project for MATH 167, Applied Linear Algebra, gave my partner and I the opportunity to select the Kaggle data set, titled: “Seoul Bike Sharing Demand Prediction: Predict the Bike Demand in specific day”. The parameters affecting demand are specific weather conditions including temperature, humidity, windspeed and more.</p>
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
						<SyntaxHighlighter className="rounded-lg p-4 text-xs bg-gray-100 text-gray-800 wrapLongLines overflow-x-auto" style={dracula} wrapLongLines language="python">
							{CodeString1}
						</SyntaxHighlighter>
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
						<SyntaxHighlighter className="rounded-lg p-4 text-xs bg-gray-100 text-gray-800 overflow-x-auto" style={dracula} wrapLongLines language="python">
							{CodeString2}
						</SyntaxHighlighter>

					</div>
					<div class="grid gap-4 mt-8">
						<img class="mt-4 w-5/6 lg:mt-10 rounded-lg" src="./img/dtr1.png" alt="office content 2" />
						<img class="mt-4 w-5/6 lg:mt-10 rounded-lg" src="./img/dtr2.png" alt="office content 2" />
					</div>
				</div>
			</section >

		</div >

	);
};

export default Bike;
