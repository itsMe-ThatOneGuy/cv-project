import React, { Component } from "react";
import "./App.css";
import Education from "./components/Education";
import General from "./components/General";

class App extends Component {
	constructor() {
		super();
		this.state = { message: "hello world!" };
	}

	render() {
		return (
			<div className="App">
				{this.state.message}
				<General />
				<Education />
			</div>
		);
	}
}

export default App;
