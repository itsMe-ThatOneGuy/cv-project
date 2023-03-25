import { Component } from "react";

class Education extends Component {
	render() {
		return (
			<div>
				<div>
					<p>{this.props.info.school}</p>
					<p>Degree: {this.props.info.degree}</p>
					<p>Start Date: {this.props.info.startDate}</p>
					<p>End Date: {this.props.info.endDate}</p>
					<button onClick={this.props.func}>Edit</button>
				</div>
			</div>
		);
	}
}

export default Education;
