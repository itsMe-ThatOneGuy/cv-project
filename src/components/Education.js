import { Component } from "react";

class Education extends Component {
	render() {
		return (
			<div>
				{this.props.info.schools.map((school) => {
					return (
						<div key={school.id++}>
							<p>{school.schoolName}</p>
							<p>Degree: {school.degree}</p>
							<p>Start Date: {school.startDate}</p>
							<p>End Date: {school.endDate}</p>
							<button>Edit</button>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Education;
