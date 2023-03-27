import { Component } from "react";
import Education from "./Education";
import uniqid from "uniqid";

class EducationForm extends Component {
	constructor() {
		super();

		this.state = {
			school: {
				id: uniqid(),
				schoolName: "",
				degree: "",
				startDate: "",
				endDate: "",
			},
			schools: [
				{
					id: uniqid(),
					schoolName: "Test School",
					degree: "CIS",
					startDate: "2013",
					endDate: "2015",
				},
			],
			displayForm: false,
			edit: false,
			edited: {
				id: "",
				schoolName: "",
				degree: "",
				startDate: "",
				endDate: "",
			},
		};

		this.editOnClick = this.editOnClick.bind(this);
		this.deleteOnclick = this.deleteOnclick.bind(this);
	}

	openForm = () => {
		this.setState({
			displayForm: true,
		});
	};

	deleteOnclick = (e) => {
		const schoolId = e.target.id.replace("delete-", "");
		const newSchools = this.state.schools.filter(
			(school) => school.id != schoolId
		);
		this.setState({
			schools: newSchools,
		});
	};

	editOnClick = (e) => {
		const schoolId = e.target.id;
		if (this.state.edit === true) return;
		this.state.schools.forEach((school) => {
			if (school.id === schoolId) {
				this.setState({
					edit: true,
					edited: {
						id: schoolId,
						schoolName: school.schoolName,
						degree: school.degree,
						startDate: school.startDate,
						endDate: school.endDate,
					},
				});
			}
		});
	};

	handelChange = (e) => {
		if (this.state.edit === true) {
			for (const [key] of Object.entries(this.state.edited)) {
				if (e.target.id === `${key}Input`) {
					this.setState((prevState) => ({
						edited: { ...prevState.edited, [key]: e.target.value },
					}));
				}
			}
		} else {
			for (const [key] of Object.entries(this.state.school)) {
				if (e.target.id === `${key}Input`) {
					this.setState((prevState) => ({
						school: { ...prevState.school, [key]: e.target.value },
					}));
				}
			}
		}
	};

	onSubmitForm = (e) => {
		e.preventDefault();
		if (this.state.edit === false) {
			const schools = this.state.schools.concat(this.state.school);
			this.setState({
				school: {
					id: uniqid(),
					schoolName: "",
					degree: "",
					startDate: "",
					endDate: "",
				},
				schools: schools,
				displayForm: false,
				edit: false,
				edited: {
					id: "",
					schoolName: "",
					degree: "",
					startDate: "",
					endDate: "",
				},
			});
		} else {
			const old = this.state.schools.find(
				(item) => item.id === this.state.edited.id
			);
			const newSchools = this.state.schools
				.filter((item) => item.id != old.id)
				.concat(this.state.edited);
			this.setState({
				schools: newSchools,
				school: {
					id: uniqid(),
					schoolName: "",
					degree: "",
					startDate: "",
					endDate: "",
				},
				edit: false,
				edited: {
					id: "",
					schoolName: "",
					degree: "",
					startDate: "",
					endDate: "",
				},
			});
		}
		console.log(this.state);
	};

	render() {
		if (this.state.displayForm === true || this.state.schools.length === 0) {
			return (
				<div>
					<h3>Add New Education Info</h3>
					<form onSubmit={this.onSubmitForm}>
						<label htmlFor="schoolNameInput">School:</label>
						<input
							onChange={this.handelChange}
							name="schoolName"
							type="text"
							id="schoolNameInput"
						/>
						<label htmlFor="degreeInput">Degree:</label>
						<input
							onChange={this.handelChange}
							name="degree"
							type="text"
							id="degreeInput"
						/>
						<label htmlFor="startDateInput">Start Date:</label>
						<input
							onChange={this.handelChange}
							name="startDate"
							type="text"
							id="startDateInput"
						/>
						<label htmlFor="endDateInput">End Date:</label>
						<input
							onChange={this.handelChange}
							name="endDate"
							type="text"
							id="endDateInput"
						/>
						<button type="submit">Save</button>
					</form>
					<Education
						info={this.state}
						editOnClick={this.editOnClick}
						deleteOnclick={this.deleteOnclick}
					/>
					<button onClick={this.openForm}>Add More</button>
				</div>
			);
		} else if (this.state.edit === true) {
			return (
				<div>
					<h3>Edit Selected Education Info</h3>
					<form onSubmit={this.onSubmitForm}>
						<label htmlFor="schoolNameInput">School:</label>
						<input
							onChange={this.handelChange}
							name="schoolName"
							value={this.state.edited.schoolName}
							type="text"
							id="schoolNameInput"
						/>
						<label htmlFor="degreeInput">Degree:</label>
						<input
							onChange={this.handelChange}
							value={this.state.edited.degree}
							name="degree"
							type="text"
							id="degreeInput"
						/>
						<label htmlFor="startDateInput">Start Date:</label>
						<input
							onChange={this.handelChange}
							name="startDate"
							value={this.state.edited.startDate}
							type="text"
							id="startDateInput"
						/>
						<label htmlFor="endDateInput">End Date:</label>
						<input
							onChange={this.handelChange}
							value={this.state.edited.endDate}
							name="endDate"
							type="text"
							id="endDateInput"
						/>
						<button type="submit">Save</button>
					</form>
				</div>
			);
		} else {
			return (
				<div>
					<Education
						info={this.state}
						editOnClick={this.editOnClick}
						deleteOnclick={this.deleteOnclick}
					/>
					<button onClick={this.openForm}>Add More</button>
				</div>
			);
		}
	}
}

export default EducationForm;
