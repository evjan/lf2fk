// src/App.tsx

import "./App.css";
import { convertFile } from "./convert";

function App() {

	const onChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
		const file = e.target.files?.[0];
		if (!file) {
			alert("No file!");
			return;
		}

		let output = await convertFile(file);
		alert(output);
		e.currentTarget.value = "";
	}

	return (
		<>
			<h1>LF2FK</h1>
			<div>
				<label>
					Upload CSV
					<input type="file" accept=".csv,text/csv" onChange={onChange} />
				</label>
			</div>
		</>
	);
}

export default App;

