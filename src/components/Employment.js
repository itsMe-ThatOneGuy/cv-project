import React, { Component } from "react";

class Employment extends Component {
	constructor() {
		super();
		this.state = {
			employer: "Test Employer",
			title: "Full Stack Developer",
			responsibilities: "Coding all the things",
			startDate: "2020",
			endDate: "2023",
		};
	}

	render() {
		return (
			<div>
				<div>
					<p>{this.state.employer}</p>
					<p>Title: {this.state.title}</p>
					<p>Responsibilities: {this.state.responsibilities}</p>
					<p>Start Date: {this.state.startDate}</p>
					<p>End Date: {this.state.endDate}</p>
				</div>
			</div>
		);
	}
}

export default Employment;
