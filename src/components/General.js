import React, { Component } from "react";

class General extends Component {
	constructor() {
		super();
		this.state = {
			name: "Jone Doe",
			phone: "(123) 123-1234",
			email: "jonedoe123@gmail.com",
		};
	}

	render() {
		return (
			<div>
				<div>
					<p>{this.state.name}</p>
					<p>Phone: {this.state.phone}</p>
					<p>Email: {this.state.email}</p>
				</div>
			</div>
		);
	}
}

export default General;
