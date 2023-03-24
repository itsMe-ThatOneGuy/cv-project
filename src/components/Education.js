import { Component } from "react";

class Education extends Component {
	constructor() {
		super();
		this.state = {
			school: "Test School",
			study: "Computer Information Science",
			startDate: "2013",
			endDate: "2015",
		};
	}

	render() {
		return (
			<div>
				<div>
					<p>{this.state.school}</p>
					<p>Degree: {this.state.study}</p>
					<p>Start Date: {this.state.startDate}</p>
					<p>End Date: {this.state.endDate}</p>
				</div>
			</div>
		);
	}
}

export default Education;
