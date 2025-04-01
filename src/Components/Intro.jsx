import React from 'react';
import { useNavigate } from 'react-router-dom';

const Intro = () => {


	const navigate = useNavigate();
	return (
		<div>
			<p>
				{"This is a user study to evaluate the effectiveness of different types of descriptions for images. In this study, you will be shown images and asked to provide alternative text for them. The study will take approximately 10-15 minutes to complete."}
				<p/>
				<p>
					{"In this study, you will describe your understanding of 24 charts. For the former 12 charts, you will answer the questions only with the charts, and for the latter 12 charts, you can interact with the buttons to generate the description. After selecting the most preferable description, you will answer the same questions."}
				</p>
			</p>
			<p>
				{"Thank you for participating in this study."}
			</p>
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
						navigate("/demo");

					}}
				>
					Proceed!!
				</button>
			</div>

		</div>
	);
}

export default Intro;

