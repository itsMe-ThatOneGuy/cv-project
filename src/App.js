import React, { Component } from "react";
import "./App.css";
import EducationForm from "./components/EducationForm";
import EmploymentForm from "./components/EmploymentForm";
import GeneralForm from "./components/GeneralForm";

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="App">
				<GeneralForm />
				<EducationForm />
				<EmploymentForm />
			</div>
		);
	}
}

export default App;
