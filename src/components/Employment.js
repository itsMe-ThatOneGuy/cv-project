import { Component } from "react";

class Employment extends Component {
	render() {
		return (
			<div>
				<div>
					<p>{this.props.info.employer}</p>
					<p>Title: {this.props.info.title}</p>
					<p>Responsibilities: {this.props.info.responsibilities}</p>
					<p>Start Date: {this.props.info.startDate}</p>
					<p>End Date: {this.props.info.endDate}</p>
					<button onClick={this.props.func}>Edit</button>
				</div>
			</div>
		);
	}
}

export default Employment;
