import { Component } from "react";

class Employment extends Component {
	render() {
		return (
			<div>
				{this.props.info.jobs.map((job) => {
					return (
						<div key={job.id}>
							<p>{this.props.info.employer}</p>
							<p>Title: {this.props.info.title}</p>
							<p>Responsibilities: {this.props.info.responsibilities}</p>
							<p>Start Date: {this.props.info.startDate}</p>
							<p>End Date: {this.props.info.endDate}</p>
							<button onClick={this.props.editOnClick} id={job.id}>
								Edit
							</button>
							<button
								onClick={this.props.deleteOnClick}
								id={`delete-${job.id}`}>
								Delete
							</button>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Employment;
