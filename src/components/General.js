import React, { Component } from "react";

class General extends Component {
	render() {
		return (
			<div>
				<h2>General Info</h2>
				<div>
					<p>{this.props.info.name}</p>
					<p>Phone: {this.props.info.phone}</p>
					<p>Email: {this.props.info.email}</p>
					<button onClick={this.props.func}>Edit</button>
				</div>
			</div>
		);
	}
}

export default General;
