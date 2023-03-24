import React, { Component } from "react";
import "./App.css";
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
			</div>
		);
	}
}

export default App;
