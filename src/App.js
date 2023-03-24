import React, { Component } from "react";
import "./App.css";
import Education from "./components/Education";
import Employment from "./components/Employment";
import Form from "./components/GeneralForm";

class App extends Component {
	constructor() {
		super();
		this.state = { message: "hello world!" };
	}

	render() {
		return (
			<div className="App">
				<Form />
				<Education />
				<Employment />
			</div>
		);
	}
}

export default App;
