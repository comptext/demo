import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

const System = (props) => {

	const [jsonId, setJsonId] = useState(0);

	let exampleJSON;
	exampleJSON = props.shuffledChartsWith[parseInt(jsonId)];



	// console.log(props.shuffledChartsWith);/

	// let showDescription = false;
	// if (wtext === "true") {
	const showDescription = true;
	// }


	console.log(exampleJSON);

	const navigate = useNavigate();


	const imagePath = exampleJSON["image_path"]
	const descriptions = exampleJSON["descriptions"];

	const [activeDescription, setActiveDescription] = useState("Descriptive");

	const handleDescriptionChange = (event) => {
		setActiveDescription(event.target.value);
	};



	return (
		<div>
			<p
				style={{
					color: "gray"
				}}
			>
			{"Welcome the the CompText Demo system. In this system, you can randomly retreive visualizations and explore the effectiveness of different types of descriptions for images. "}
			</p>
			

			<div style={{
				justifyContent: "left",
				display: "flex",
			}}>
				
				<button
					style={{
						padding: "7px",
						marginTop: "10px",
						// marginLeft: "10px"
					}}
					onClick={() => { 

						const randomJsonId = Math.floor(Math.random() * 12);
						setJsonId(randomJsonId);
					}}
				>
					Randomly Select Visualization
				</button>
				<button
					style={{
						padding: "7px",
						marginTop: "10px",
						marginLeft: "10px"
					}}
					onClick={() => { 
						// download the description as json file
						const element = document.createElement("a");
						const file = new Blob([JSON.stringify(exampleJSON["descriptions"])], {type: 'text/plain'});
						element.href = URL.createObjectURL(file);
						element.download = "CompText.json";
						document.body.appendChild(element); // Required for this to work in FireFox
						element.click();

					}}
				>
					Export CompText!!
				</button>
			</div>


			{showDescription &&
				<div>
					<div style={{ marginTop: "20px" }}>
						<label style={{ marginRight: "10px" }}>
							<label style={{ marginRight: "10px" }}>
								<input
									type="radio"
									value="Overview"
									checked={activeDescription === "Overview"}
									onChange={handleDescriptionChange}
								/>
								Overview
							</label>
							<input
								type="radio"
								value="Descriptive"
								checked={activeDescription === "Descriptive"}
								onChange={handleDescriptionChange}
							/>
							Descriptive
						</label>
						<label style={{ marginRight: "10px" }}>
							<input
								type="radio"
								value="StatisticallyInformative"
								checked={activeDescription === "StatisticallyInformative"}
								onChange={handleDescriptionChange}
							/>
							Statistically Informative
						</label>
						<label style={{ marginRight: "10px" }}>
							<input
								type="radio"
								value="VisuallyInformative"
								checked={activeDescription === "VisuallyInformative"}
								onChange={handleDescriptionChange}
							/>
							Visually Informative
						</label>
					</div>
					<img src={process.env.PUBLIC_URL + imagePath} alt="Experiment Image" width="800" />
					{/* 선택된 description 출력 */}
					<div style={{ marginTop: "20px" }}>
						<p>{descriptions[activeDescription]}</p>
					</div>
				</div>
			}
			
			<div style={{
				justifyContent: "right",
				display: "flex",
			}}>
				{/* <button
					style={{
						padding: "7px",
						marginTop: "10px"
					}}
					onClick={() => {
						if (parseInt(jsonId) === 11 && wtext === "false") {
							navigate("/exp/" + 0 + "/" + "true")
						}
						else if (parseInt(jsonId) === 11 && wtext === "true") {
							navigate("/thankyou")
						}
						else {
							navigate("/exp/" + (parseInt(jsonId) + 1) + "/" + wtext);
						}

					}}
				>
					Proceed to the next Visualization
				</button> */}
			</div>

		</div>

	);
};

export default System;
