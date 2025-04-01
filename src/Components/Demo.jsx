import React, { useState } from "react";

import { useParams, useNavigate } from 'react-router-dom';

import "./Demo.css";

function Demo() {

	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");

	const [education, setEducation] = useState("");
	const [major, setMajor] = useState("");
	const [job, setJob] = useState("");

	const [familarity, setFamilarity] = useState("");

	const navigate = useNavigate();

	// const { pnum } = useParams();

	return (
		<div className="intro">
			<h3>Please fill out demographic informations.</h3>

			<p>
				Age:
				<select className="dropdown" value={age} onChange={(e) => setAge(e.target.value)}>
					{[...Array(100).keys()].map((i) => {
						return <option key={i} value={i}>{i}</option>
					})}
				</select>
			</p>
			<div className="radioInputWrapper">
				<p className="radioInputP">
					Gender:
				</p>
				<div className="radioInputInner">

					<form>
						<label>
							Male
							<input type="radio" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />
						</label>
						<label>
							Female
							<input type="radio" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />
						</label>
						<label>
							Non-binary
							<input type="radio" value="non-binary" checked={gender === "non-binary"} onChange={(e) => setGender(e.target.value)} />
						</label>
					</form>

				</div>

			</div>

			<p>
				Education Level:
				<select className="dropdown" value={education} onChange={(e) => setEducation(e.target.value)}>
					<option value="ug">Undergraduate</option>
					<option value="bachelor">Bachelor</option>
					<option value="master">Master</option>
					<option value="phd">Ph.D.</option>
				</select>
				Major:
				<input type="text" className="textInput" value={major} onChange={(e) => setMajor(e.target.value)} style={{ width: 200 }} />
			</p>
			<p>
				Profession:
				<input type="text" className="textInput" value={job} onChange={(e) => setJob(e.target.value)} style={{ width: 200 }} />
			</p>

			<div className="radioInputWrapper">
				<p className="radioInputP">
					Familarity to data visualization:
				</p>
				<div className="radioInputInner">

					<form>
						<label>
							Not Familiar
							<input type="radio" value="not-familiar" checked={familarity === "not-familiar"} onChange={(e) => setFamilarity(e.target.value)} />
						</label>
						<label>
							Intermediate
							<input type="radio" value="inter" checked={familarity === "inter"} onChange={(e) => setFamilarity(e.target.value)} />
						</label>
						<label>
							Familiar
							<input type="radio" value="familiar" checked={familarity === "familiar"} onChange={(e) => setFamilarity(e.target.value)} />
						</label>
					</form>

				</div>

			</div>
			<div className="buttonDiv">
				<button
					disabled={
						age === "" ||
						gender === "" ||
						major === "" ||
						job === "" ||
						familarity === "" 
					}
					onClick={() => {
						

						navigate("/exp/1/false");
					}}
				>Start the Experiment!!</button>
			</div>
		</div>
	)

}

export default Demo;