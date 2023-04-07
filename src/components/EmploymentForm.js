import { useState } from "react";
import Employment from "./Employment";
import uniqid from "uniqid";

const EmploymentForm = () => {
	const [info, setInfo] = useState({
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
	});

	const openForm = () => {
		setInfo({
			...info,
			displayForm: true,
		});
	};

	const deleteOnclick = (e) => {
		const jobId = e.target.id.replace("delete-", "");
		const newJobs = info.jobs.filter((job) => job.id !== jobId);
		setInfo({
			...info,
			jobs: newJobs,
		});
	};

	const editOnClick = (e) => {
		const jobId = e.target.id;
		if (info.edit === true) return;
		info.jobs.forEach((job) => {
			if (job.id === jobId) {
				setInfo({
					...info,
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

	const handelChange = (e) => {
		if (info.edit === true) {
			for (const [key] of Object.entries(info.edited)) {
				if (e.target.id === `${key}Input`) {
					setInfo({
						...info,
						edited: { ...info.edited, [key]: e.target.value },
					});
				}
			}
		} else {
			for (const [key] of Object.entries(info.job)) {
				if (e.target.id === `${key}Input`) {
					setInfo({
						...info,
						job: { ...info.job, [key]: e.target.value },
					});
				}
			}
		}
	};

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (info.edit === false) {
			const jobs = info.jobs.concat(info.job);
			setInfo({
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
			const old = info.jobs.find((item) => item.id === info.edited.id);
			const newJobs = info.jobs
				.filter((item) => item.id !== old.id)
				.concat(info.edited);
			setInfo({
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
	};

	if (info.displayForm === true || info.jobs.length === 0) {
		return (
			<div>
				<h3>Add New Employment Info</h3>
				<form onSubmit={onSubmitForm}>
					<label htmlFor="employerInput">Employer:</label>
					<input
						onChange={handelChange}
						type="text"
						id="employerInput"
					/>
					<label htmlFor="titleInput">Title:</label>
					<input
						onChange={handelChange}
						type="text"
						id="titleInput"
					/>
					<label htmlFor="responsibilitiesInput">
						Responsibilities:
					</label>
					<input
						onChange={handelChange}
						type="text"
						id="responsibilitiesInput"
					/>
					<label htmlFor="startDateInput">Start Date:</label>
					<input
						onChange={handelChange}
						type="text"
						id="startDateInput"
					/>
					<label htmlFor="endDateInput">End Date:</label>
					<input
						onChange={handelChange}
						type="text"
						id="endDateInput"
					/>
					<button type="submit">Save</button>
				</form>
				<Employment
					info={info}
					editOnClick={editOnClick}
					deleteOnclick={deleteOnclick}
				/>
				<button onClick={openForm}>Add More</button>
			</div>
		);
	} else if (info.edit === true) {
		return (
			<div>
				<h3>Edit Selected Employment Info</h3>
				<form onSubmit={onSubmitForm}>
					<label htmlFor="employerInput">Employer:</label>
					<input
						onChange={handelChange}
						value={info.edited.employer}
						type="text"
						id="employerInput"
					/>
					<label htmlFor="titleInput">Title:</label>
					<input
						onChange={handelChange}
						value={info.edited.title}
						type="text"
						id="titleInput"
					/>
					<label htmlFor="responsibilitiesInput">
						Responsibilities:
					</label>
					<input
						onChange={handelChange}
						value={info.edited.responsibilities}
						type="text"
						id="responsibilitiesInput"
					/>
					<label htmlFor="startDateInput">Start Date:</label>
					<input
						onChange={handelChange}
						value={info.edited.startDate}
						type="text"
						id="startDateInput"
					/>
					<label htmlFor="endDateInput">End Date:</label>
					<input
						onChange={handelChange}
						value={info.edited.endDate}
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
					info={info}
					editOnClick={editOnClick}
					deleteOnclick={deleteOnclick}
				/>
				<button onClick={openForm}>Add More</button>
			</div>
		);
	}
};

export default EmploymentForm;
