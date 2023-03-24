import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = { message: "hello world!" };
	}

	render() {
		return <div className="App">{this.state.message}</div>;
	}
}

export default App;
