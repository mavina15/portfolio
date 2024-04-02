import React from "react";
import { a11yLight, anOldHope, solarizedLight } from "react-code-blocks";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Visual = () => {

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

		<div id="visual" class="container mx-auto my-auto p-4 max-w-8xl">

			<section class="bg-white my-12">
				<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
					<div class="mr-auto place-self-center lg:col-span-7">
						<h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Visualizing Society</h1>
						<h2 class="max-w-xl my-6 text-3xl font-extrabold">Goal: Develop and evaluate machine learning models to accurately classify breast tumors.</h2>
						<p class="max-w-2xl mb-6 font-light text-gray-500 md:text-lg lg:text-xl"> During the weekend, the UC Davis AI Student Collective hosted a 4 hour workshop, to classify Breast Cancer using 10 machine learning techniques. They choose this subject as Breast Cancer plagues women worldwide. Early detection has shown to be vital in improving patient outcomes. Machine Learning Algorithms have the potential to build models to accurately predict the malignancy of a breast tumor using features extracted from images of breast mass.</p>
					</div>
					<div class="lg:col-span-5 lg:flex lg:items-center">
						<img class="object-contain mx-auto lg:mx-0" src="./img/people.png" alt="mockup" />
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
						<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Lab 10
						</h2>
						<h4 class="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 ">Analysis of Income Distribution Among Non-institutional Population
						</h4>
						<p class="mb-4">This lab analyzes income distribution among the non-institutional population, individuals consistently surveyed about their income aged 16+, focusing on sex, race, and ethnicity factors, utilizing the IPUMS dataset, which collects, preserves, and harmonizes U.S. census microdata, providing enhanced accessibility and documentation, including techniques like inflation adjustment and income categorization for data preparation and analysis.
						</p>
						<h6 class="mb-4 text-xl tracking-tight font-extrabold text-gray-900 ">Cleaning Data
						</h6>
						<p class="mb-4">This lab analyzes income distribution among the non-institutional population, individuals consistently surveyed about their income aged 16+, focusing on sex, race, and ethnicity factors, utilizing the IPUMS dataset, which collects, preserves, and harmonizes U.S. census microdata, providing enhanced accessibility and documentation, including techniques like inflation adjustment and income categorization for data preparation and analysis.
						</p>
						<h6 class="mb-4 text-xl tracking-tight font-extrabold text-gray-900 ">Income Categorization
						</h6>
						<p class="mb-4">The data is then categorized by reported earning into six income brackets, requiring a new factor variable “INCAAT” to indicate income category. This allows a standardized approach to income analysis spanning different census years.
						</p>
						<h6 class="mb-4 text-xl tracking-tight font-extrabold text-gray-900 ">Conclusion
						</h6>
						<p class="mb-4">This analysis shed light on income distribution dynamics among the non-institutional population. The findings contribute to a better understanding of socioeconomic disparities and serves as a valuable resource for policymakers and researchers interested in addressing inequality issues.
						</p>
					</div>
					<div class="grid gap-4 mt-8">
						<img class="mt-4 w-4/5 lg:mt-10 rounded-lg" src="./img/lab10p1.png" alt="office content 2" />
						<img class="mt-4 w-4/5 lg:mt-10 rounded-lg" src="./img/lab10p2.png" alt="office content 2" />
						<img class="mt-4 w-4/5 lg:mt-10 rounded-lg" src="./img/lab10p3.png" alt="office content 2" />
					</div>
				</div>
			</section>

		</div>
	);
};

export default Visual;
