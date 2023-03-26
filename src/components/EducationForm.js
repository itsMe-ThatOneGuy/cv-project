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

	handelChange = (e) => {
		for (const [key] of Object.entries(this.state.school)) {
			if (e.target.id === `${key}Input`) {
				this.setState((prevState) => ({
					school: { ...prevState.school, [key]: e.target.value },
				}));
			}
		}
	};

	onSubmitForm = (e) => {
		e.preventDefault();
		const schools = this.state.schools.concat(this.state.school);
		this.setState({
			schools: schools,
			school: {
				id: 0,
				schoolName: "",
				degree: "",
				startDate: "",
				endDate: "",
				edit: false,
			},
		});
		console.log(this.state);
	};

	test = () => {
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitForm}>
					<label htmlFor="schoolNameInput">School:</label>
					<input
						onChange={this.handelChange}
						name="schoolName"
						//value={this.state.school}
						type="text"
						id="schoolNameInput"
					/>
					<label htmlFor="degreeInput">Degree:</label>
					<input
						onChange={this.handelChange}
						//value={this.state.degree}
						name="degree"
						type="text"
						id="degreeInput"
					/>
					<label htmlFor="startDateInput">Start Date:</label>
					<input
						onChange={this.handelChange}
						name="startDate"
						//value={this.state.startDate}
						type="text"
						id="startDateInput"
					/>
					<label htmlFor="endDateInput">End Date:</label>
					<input
						onChange={this.handelChange}
						//value={this.state.endDate}
						name="endDate"
						type="text"
						id="endDateInput"
					/>
					<button type="submit">Save</button>
					<button onClick={this.test}>test</button>
				</form>
				<Education info={this.state} />
			</div>
		);
	}
}

export default EducationForm;
