import React from "react";
import { a11yLight, anOldHope, solarizedLight } from "react-code-blocks";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Cancer = () => {

	const CodeString = `# implement evaluation function
	def evaluate(y_true, y_pred, y_prob, model_name):
	  print(f"Model: {model_name}")
	  print("\\n") # line break
	
	  print("Confusion Matrix:")
	  print(confusion_matrix(y_true, y_pred))
	  print("\\n") # line break
	
	  print("Classification Report:")
	  print(classification_report(y_true, y_pred))
	  print("\\n") # line break
	
	  if y_prob is not None:
		print("AUC Score:", roc_auc_score(y_true, y_prob)) 
		# what is a roc graph/auc (area under curve)?
	  print("\\n") # line break`;

	return (

		<div id="cancer" class="container mx-auto my-auto p-4 max-w-8xl">

			<section class="bg-white my-12">
				<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
					<div class="mr-auto place-self-center lg:col-span-7">
						<h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Breast Cancer Classification</h1>
						<h2 class="max-w-xl my-6 text-3xl font-extrabold">Goal: Develop and evaluate machine learning models to accurately classify breast tumors.</h2>
						<p class="max-w-2xl mb-6 font-light text-gray-500 md:text-lg lg:text-xl"> During the weekend, the UC Davis AI Student Collective hosted a 4 hour workshop, to classify Breast Cancer using 10 machine learning techniques. They choose this subject as Breast Cancer plagues women worldwide. Early detection has shown to be vital in improving patient outcomes. Machine Learning Algorithms have the potential to build models to accurately predict the malignancy of a breast tumor using features extracted from images of breast mass.</p>
					</div>
					<div class="lg:col-span-5 lg:flex lg:items-center">
						<img class="rounded-xl shadow-md object-contain mx-auto lg:mx-0" src="./img/breastcancerai.jpeg" alt="mockup" />
					</div>
				</div>
			</section>

			<section class="bg-white">
				<div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
					<div class="font-light text-gray-500 sm:text-lg">
						<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Data Collection and Preprocessing</h2>
						<p class="mb-4">In this project, we are utilizing the Breast Cancer Wisconsin dataset, a dataset available in the Scikit-learn library. It is made up of features computed from a digitized image of a fine needle aspirate of breast mass, and the target variable indicated whether the tumor is malignant or benign. This allows us to preprocess the data by standardizing values using “StandardScaler,” for the equal contribution of features in model training.   </p>
					</div>
					<div class="grid gap-4 mt-8">
						<SyntaxHighlighter className="rounded-lg p-4 text-md bg-gray-100 text-gray-800 overflow-x-auto" style={dracula} wrapLongLines language="python">
							{CodeString}
						</SyntaxHighlighter>
					</div>
				</div>
			</section >

			<section class="bg-white">
				<div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
					<div class="font-light text-gray-500 sm:text-lg">
						<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Model Training and Evaluation</h2>
						<p class="mb-4">The following are classification algorithms to build predictive models for breast cancer diagnosis: logistic regression, k-nearest neighbors, support vector machine, decision tree, random forest, gradient boosting, naive bayes, nueral network, adaboost and xgboost. </p>
						<p>Every model with have data split into training and testing sets. We use evaluation metrics like accuracy, precision, recall, F-1 score and under the ROC curve (AUC) to assess a model’s predictive capability. After, confusion matrices are generated to help us visualize a model’s performance in predicting true positive, true negative, false positive and false negative cases.  </p>


					</div>
					<div class="grid gap-4 mt-8">

						<div class="p-4 bg-gray-100 rounded-md">
							<h2 class="text-lg font-semibold mb-4">Model: Logistic Regression</h2>

							<table class="w-full border-collapse border border-gray-300">
								<thead>
									<tr>
										<th class="border border-gray-300 px-4 py-2">Metric</th>
										<th class="border border-gray-300 px-4 py-2">Class 0</th>
										<th class="border border-gray-300 px-4 py-2">Class 1</th>
										<th class="border border-gray-300 px-4 py-2">Average/Total</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="border border-gray-300 px-4 py-2">Precision</td>
										<td class="border border-gray-300 px-4 py-2">0.97</td>
										<td class="border border-gray-300 px-4 py-2">0.99</td>
										<td class="border border-gray-300 px-4 py-2">0.98</td>
									</tr>
									<tr>
										<td class="border border-gray-300 px-4 py-2">Recall</td>
										<td class="border border-gray-300 px-4 py-2">0.98</td>
										<td class="border border-gray-300 px-4 py-2">0.98</td>
										<td class="border border-gray-300 px-4 py-2">0.98</td>
									</tr>
									<tr>
										<td class="border border-gray-300 px-4 py-2">F1-Score</td>
										<td class="border border-gray-300 px-4 py-2">0.98</td>
										<td class="border border-gray-300 px-4 py-2">0.99</td>
										<td class="border border-gray-300 px-4 py-2">0.98</td>
									</tr>
									<tr>
										<td class="border border-gray-300 px-4 py-2">Accuracy</td>
										<td colspan="2" class="border border-gray-300 px-4 py-2">0.98</td>
										<td class="border border-gray-300 px-4 py-2">0.98</td>
									</tr>
								</tbody>
							</table>

							<div class="mt-4">
								<h3 class="text-md font-semibold mb-2">AUC Score:</h3>
								<p>0.9980893592004703</p>
							</div>
						</div>

						<div class="p-4 bg-gray-100 rounded-md">
							<h2 class="text-lg font-semibold mb-4">Model: K Neighbors Classifier</h2>

							<table class="w-full border-collapse border border-gray-300">
								<thead>
									<tr>
										<th class="border border-gray-300 px-4 py-2">Metric</th>
										<th class="border border-gray-300 px-4 py-2">Class 0</th>
										<th class="border border-gray-300 px-4 py-2">Class 1</th>
										<th class="border border-gray-300 px-4 py-2">Average/Total</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="border border-gray-300 px-4 py-2">Precision</td>
										<td class="border border-gray-300 px-4 py-2">0.95</td>
										<td class="border border-gray-300 px-4 py-2">0.96</td>
										<td class="border border-gray-300 px-4 py-2">0.96</td>
									</tr>
									<tr>
										<td class="border border-gray-300 px-4 py-2">Recall</td>
										<td class="border border-gray-300 px-4 py-2">0.94</td>
										<td class="border border-gray-300 px-4 py-2">0.97</td>
										<td class="border border-gray-300 px-4 py-2">0.96</td>
									</tr>
									<tr>
										<td class="border border-gray-300 px-4 py-2">F1-Score</td>
										<td class="border border-gray-300 px-4 py-2">0.94</td>
										<td class="border border-gray-300 px-4 py-2">0.97</td>
										<td class="border border-gray-300 px-4 py-2">0.96</td>
									</tr>
									<tr>
										<td class="border border-gray-300 px-4 py-2">Accuracy</td>
										<td colspan="2" class="border border-gray-300 px-4 py-2">0.96</td>
										<td class="border border-gray-300 px-4 py-2">0.96</td>
									</tr>
								</tbody>
							</table>

							<div class="mt-4">
								<h3 class="text-md font-semibold mb-2">AUC Score:</h3>
								<p>0.9776601998824221</p>
							</div>
						</div>

					</div>
				</div>
			</section>

			<section class="bg-white">
				<div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
					<div class="font-light text-gray-500 sm:text-lg">
						<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Results and Insights</h2>
						<p class="mb-4">Based on the evaluation, we can see the performance in the algorithms. The algorithms with high accuracy and AUC scores, demonstrate efficacy in breast cancer diagnosis, which include logistics regression, support vector machine, random forest, neural network, adaboost and xgboost. These models perform extremely well in differentiating malignant and benign tumors. </p>

					</div>
					<div class="grid gap-4 mt-8">
						<img class="mt-4 w-5/6 lg:mt-10 rounded-lg" src="./img/roccurve.png" alt="office content 2" />
						<img class="mt-4 w-5/6 lg:mt-10 rounded-lg" src="./img/prcurve.png" alt="office content 2" />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Cancer;
