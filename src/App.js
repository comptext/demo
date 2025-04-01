import './App.css';
import Experiment from './Components/Experiment';
import Intro from './Components/Intro';
import Demo from './Components/Demo';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';

import charts from "./final_json/12charts.json";
import Thank from './Components/Thanks';
import System from './Components/System';

function App() {


	console.log(charts);

	// shuffle the array
	const shuffledChartsWithout = charts.sort(() => Math.random() - 0.5);

	const shuffledChartsWith = charts.sort(() => Math.random() - 0.5);
	


  return (
    <div className="App">
			<h1>
				{"CompText"}
			</h1>
			<Router>
				<Routes>
					<Route path="/intro" element={<Intro />} />
					<Route path="/exp/:jsonId/:wtext" element={<Experiment 
						shuffledChartsWithout={shuffledChartsWithout}
						shuffledChartsWith={shuffledChartsWith}
					/> } />
					<Route path="/demo" element={<Demo />} />
					<Route path="/thankyou" element={<Thank />} />
					<Route path="/" element={<System 
						shuffledChartsWith={shuffledChartsWith}
					/>} />
				</Routes>
			</Router>
    </div>
  );
}

export default App;
