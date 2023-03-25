import { Component } from "react";
import Education from "./Education";

class EducationForm extends Component {
	constructor() {
		super();

		this.state = {
			school: {
				id: 0,
				schoolName: "Test School",
				degree: "CIS",
				startDate: "2013",
				endDate: "2015",
				edit: false,
			},
			schools: [],
		};

		this.editOnClick = this.editOnClick.bind(this);
	}

	editOnClick = () => {
		if (!this.state.edit) {
			this.setState({
				edit: true,
			});
		} else {
			this.setState({
				edit: false,
			});
		}
	};

	handelChange = (e) => {};

	onSubmitForm = (e) => {};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitForm}>
					<label htmlFor="schoolNameInput">School:</label>
					<input
						onChange={this.handelChange}
						//value={this.state.school}
						type="text"
						id="schoolInput"
					/>
					<label htmlFor="degreeInput">Degree:</label>
					<input
						onChange={this.handelChange}
						//value={this.state.degree}
						type="text"
						id="degreeInput"
					/>
					<label htmlFor="startDateInput">Start Date:</label>
					<input
						onChange={this.handelChange}
						//value={this.state.startDate}
						type="text"
						id="startDateInput"
					/>
					<label htmlFor="endDateInput">End Date:</label>
					<input
						onChange={this.handelChange}
						//value={this.state.endDate}
						type="text"
						id="endDateInput"
					/>
					<button type="submit">Save</button>
				</form>
			</div>
		);
	}
}

export default EducationForm;
