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
		const url = URL.createObjectURL(output);
		const a = document.createElement("a");
		a.href = url;
		a.download = output.name;
		a.click();
		URL.revokeObjectURL(url);
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

