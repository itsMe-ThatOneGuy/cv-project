import { Component } from "react";
import Employment from "./Employment";
import uniqid from "uniqid";

class EmploymentForm extends Component {
	constructor() {
		super();

		this.state = {
			job: {
				id: uniqid(),
				employer: "",
				title: "",
				responsibilities: "",
				startDate: "",
				endDate: "",
			},
			jobs: [
				{
					id: uniqid(),
					employer: "Test Employer",
					title: "Full Stack Developer",
					responsibilities: "Coding all the things",
					startDate: "2020",
					endDate: "2023",
				},
			],
			displayForm: false,
			edit: false,
			edited: {
				id: "",
				employer: "",
				title: "",
				responsibilities: "",
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
		const jobId = e.target.id.replace("delete-", "");
		const newJobs = this.state.jobs.filter((job) => job.id != jobId);
		this.setState({
			jobs: newJobs,
		});
	};

	editOnClick = (e) => {
		const jobId = e.target.id;
		if (this.state.edit === true) return;
		this.state.jobs.forEach((job) => {
			if (job.id === jobId) {
				this.setState({
					edit: true,
					edited: {
						id: jobId,
						employer: job.employer,
						title: job.title,
						responsibilities: job.responsibilities,
						startDate: job.startDate,
						endDate: job.endDate,
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
			for (const [key] of Object.entries(this.state.job)) {
				if (e.target.id === `${key}Input`) {
					this.setState((prevState) => ({
						job: { ...prevState.job, [key]: e.target.value },
					}));
				}
			}
		}
	};

	onSubmitForm = (e) => {
		e.preventDefault();
		if (this.state.edit === false) {
			const jobs = this.state.jobs.concat(this.state.job);
			this.setState({
				job: {
					id: uniqid(),
					employer: "",
					title: "",
					responsibilities: "",
					startDate: "",
					endDate: "",
				},
				jobs: jobs,
				displayForm: false,
				edit: false,
				edited: {
					id: "",
					employer: "",
					title: "",
					responsibilities: "",
					startDate: "",
					endDate: "",
				},
			});
		} else {
			const old = this.state.jobs.find(
				(item) => item.id === this.state.edited.id
			);
			const newJobs = this.state.jobs
				.filter((item) => item.id != old.id)
				.concat(this.state.edited);
			this.setState({
				jobs: newJobs,
				job: {
					id: uniqid(),
					employer: "",
					title: "",
					responsibilities: "",
					startDate: "",
					endDate: "",
				},
				edit: false,
				edited: {
					id: "",
					employer: "",
					title: "",
					responsibilities: "",
					startDate: "",
					endDate: "",
				},
			});
		}
		console.log(this.state);
	};

	render() {
		if (this.state.displayForm === true || this.state.jobs.length === 0) {
			return (
				<div>
					<h3>Add New Employment Info</h3>
					<form onSubmit={this.onSubmitForm}>
						<label htmlFor="employerInput">Employer:</label>
						<input
							onChange={this.handelChange}
							type="text"
							id="employerInput"
						/>
						<label htmlFor="titleInput">Title:</label>
						<input onChange={this.handelChange} type="text" id="titleInput" />
						<label htmlFor="responsibilitiesInput">Responsibilities:</label>
						<input
							onChange={this.handelChange}
							type="text"
							id="responsibilitiesInput"
						/>
						<label htmlFor="startDateInput">Start Date:</label>
						<input
							onChange={this.handelChange}
							type="text"
							id="startDateInput"
						/>
						<label htmlFor="endDateInput">End Date:</label>
						<input onChange={this.handelChange} type="text" id="endDateInput" />
						<button type="submit">Save</button>
					</form>
					<Employment
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
					<h3>Edit Selected Employment Info</h3>
					<form onSubmit={this.onSubmitForm}>
						<label htmlFor="employerInput">Employer:</label>
						<input
							onChange={this.handelChange}
							value={this.state.edited.employer}
							type="text"
							id="employerInput"
						/>
						<label htmlFor="titleInput">Title:</label>
						<input
							onChange={this.handelChange}
							value={this.state.edited.title}
							type="text"
							id="titleInput"
						/>
						<label htmlFor="responsibilitiesInput">Responsibilities:</label>
						<input
							onChange={this.handelChange}
							value={this.state.edited.responsibilities}
							type="text"
							id="responsibilitiesInput"
						/>
						<label htmlFor="startDateInput">Start Date:</label>
						<input
							onChange={this.handelChange}
							value={this.state.edited.startDate}
							type="text"
							id="startDateInput"
						/>
						<label htmlFor="endDateInput">End Date:</label>
						<input
							onChange={this.handelChange}
							value={this.state.edited.endDate}
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
					<Employment
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

export default EmploymentForm;
