import { Component } from "react";

class Employment extends Component {
	render() {
		return (
			<div>
				{this.props.info.jobs.map((job) => {
					return (
						<div key={job.id}>
							<p>{job.employer}</p>
							<p>Title: {job.title}</p>
							<p>Responsibilities: {job.responsibilities}</p>
							<p>Start Date: {job.startDate}</p>
							<p>End Date: {job.endDate}</p>
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
