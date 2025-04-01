import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

const Experiment = (props) => {

	const { jsonId, wtext } = useParams();

	let exampleJSON;
	if (wtext === "true") {
		exampleJSON = props.shuffledChartsWith[parseInt(jsonId)];
	}
	else {
		exampleJSON = props.shuffledChartsWithout[parseInt(jsonId)];
	}

	// console.log(props.shuffledChartsWith);/

	let showDescription = false;
	if (wtext === "true") {
		showDescription = true;
	}
	

	console.log(exampleJSON);

	const navigate = useNavigate();


	const imagePath =   exampleJSON["image_path"]
	const descriptions = exampleJSON["descriptions"];

	const [activeDescription, setActiveDescription] = useState("Descriptive");

	const handleDescriptionChange = (event) => {
		setActiveDescription(event.target.value);
	};

	const falseDescription = "Please 1) describe what you see in the graph and 2) list out what questions would you be able to answer from this graph."

	const trueDescription = "Please list out what questions would you be able to answer from this graph. After playing with the system and generating descriptions, what questions would you be able to answer from this visualization and descriptions? How salient / diverse / statistically informative is the description?"

	return (
		<div>
			<p
				style={{
					color: "gray"
				}}
			>
				{wtext === "true" ? trueDescription : falseDescription}
			</p>
			<img src={imagePath} alt="Experiment Image" width="800" />
			

			{showDescription && 
				<div>
					<div style={{ marginTop: "20px" }}>
						<label style={{ marginRight: "10px" }}>
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
								value="Overview"
								checked={activeDescription === "Overview"}
								onChange={handleDescriptionChange}
							/>
							Overview
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
				<button
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
				</button>
			</div>

		</div>

	);
};

export default Experiment;
