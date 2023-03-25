import { Component } from "react";
import Employment from "./Employment";

class EmploymentForm extends Component {
	constructor() {
		super();

		this.state = {
			employer: "Test Employer",
			title: "Full Stack Developer",
			responsibilities: "Coding all the things",
			startDate: "2020",
			endDate: "2023",
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

	handelChange = (e) => {
		for (const [key] of Object.entries(this.state)) {
			if (e.target.id === `${key}Input`) {
				this.setState({
					[key]: e.target.value,
				});
			}
		}
	};

	onSubmitForm = (e) => {
		e.preventDefault();
		this.setState({
			edit: false,
		});
	};

	render() {
		if (!this.state.edit) {
			return <Employment info={this.state} func={this.editOnClick} />;
		} else {
			return (
				<div>
					<form onSubmit={this.onSubmitForm}>
						<label htmlFor="employerInput">School:</label>
						<input
							onChange={this.handelChange}
							value={this.state.employer}
							type="text"
							id="employerInput"
						/>
						<label htmlFor="titleInput">Degree:</label>
						<input
							onChange={this.handelChange}
							value={this.state.title}
							type="text"
							id="titleInput"
						/>
						<label htmlFor="responsibilitiesInput">Degree:</label>
						<input
							onChange={this.handelChange}
							value={this.state.responsibilities}
							type="text"
							id="responsibilitiesInput"
						/>
						<label htmlFor="startDateInput">Start Date:</label>
						<input
							onChange={this.handelChange}
							value={this.state.startDate}
							type="text"
							id="startDateInput"
						/>
						<label htmlFor="endDateInput">End Date:</label>
						<input
							onChange={this.handelChange}
							value={this.state.endDate}
							type="text"
							id="endDateInput"
						/>
						<button type="submit">Save</button>
					</form>
				</div>
			);
		}
	}
}

export default EmploymentForm;
