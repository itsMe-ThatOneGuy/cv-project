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
				<header>
					<h1>CV-App</h1>
				</header>
				<GeneralForm />
				<EducationForm />
				<EmploymentForm />
				<footer>
					<p>
						Copyright © 2023{" "}
						<a href="https://github.com/itsMe-ThatOneGuy" target="_blank">
							itsMe-ThatOneGuy
						</a>
					</p>
				</footer>
			</div>
		);
	}
}

export default App;
