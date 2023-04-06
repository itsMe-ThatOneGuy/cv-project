import { useState } from "react";
import Education from "./Education";
import uniqid from "uniqid";

const EducationForm = () => {
	const defaultSchool = {
		id: uniqid(),
		schoolName: "Test School",
		degree: "CIS",
		startDate: "2013",
		endDate: "2015",
	};

	const [buffer, setBuffer] = useState({});
	const [schools, setSchools] = useState([defaultSchool]);
	const [displayForm, setDisplayForm] = useState(false);
	const [edit, setEdit] = useState(false);

	const openForm = () => {
		setDisplayForm({
			displayForm: true,
		});
	};

	const deleteOnclick = (e) => {
		const schoolId = e.target.id.replace("delete-", "");
		const newSchools = info.schools.filter(
			(school) => school.id !== schoolId
		);
		setInfo({
			...info,
			schools: newSchools,
		});
	};

	const editOnClick = (e) => {
		const schoolId = e.target.id;
		if (info.edit === true) return;
		info.schools.forEach((school) => {
			if (school.id === schoolId) {
				setInfo({
					...info,
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

	const handleChange = (key, value) => {
		setBuffer({ ...buffer, [key]: value });
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
			for (const [key] of Object.entries(info.school)) {
				if (e.target.id === `${key}Input`) {
					setInfo({
						...info,
						school: { ...info.school, [key]: e.target.value },
					});
				}
			}
		}
	};

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (info.edit === false) {
			const schools = info.schools.concat(info.school);
			setInfo({
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
			const old = info.schools.find((item) => item.id === info.edited.id);
			const newSchools = info.schools
				.filter((item) => item.id !== old.id)
				.concat(info.edited);
			setInfo({
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
	};

	if (displayForm === true || schools.length === 0) {
		return (
			<div>
				<h3>Add New Education Info</h3>
				<form onSubmit={onSubmitForm}>
					<label htmlFor="schoolNameInput">School:</label>
					<input
						onChange={handelChange}
						name="schoolName"
						type="text"
						id="schoolNameInput"
					/>
					<label htmlFor="degreeInput">Degree:</label>
					<input
						onChange={handelChange}
						name="degree"
						type="text"
						id="degreeInput"
					/>
					<label htmlFor="startDateInput">Start Date:</label>
					<input
						onChange={handelChange}
						name="startDate"
						type="text"
						id="startDateInput"
					/>
					<label htmlFor="endDateInput">End Date:</label>
					<input
						onChange={handelChange}
						name="endDate"
						type="text"
						id="endDateInput"
					/>
					<button type="submit">Save</button>
				</form>
				<Education
					info={schools}
					editOnClick={editOnClick}
					deleteOnclick={deleteOnclick}
				/>
				<button onClick={openForm}>Add More</button>
			</div>
		);
	} else if (info.edit === true) {
		return (
			<div>
				<h3>Edit Selected Education Info</h3>
				<form onSubmit={onSubmitForm}>
					<label htmlFor="schoolNameInput">School:</label>
					<input
						onChange={handleChange}
						name="schoolName"
						value={info.edited.schoolName}
						type="text"
						id="schoolNameInput"
					/>
					<label htmlFor="degreeInput">Degree:</label>
					<input
						onChange={handleChange}
						value={info.edited.degree}
						name="degree"
						type="text"
						id="degreeInput"
					/>
					<label htmlFor="startDateInput">Start Date:</label>
					<input
						onChange={handleChange}
						name="startDate"
						value={info.edited.startDate}
						type="text"
						id="startDateInput"
					/>
					<label htmlFor="endDateInput">End Date:</label>
					<input
						onChange={handleChange}
						value={info.edited.endDate}
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
					info={schools}
					editOnClick={editOnClick}
					deleteOnclick={deleteOnclick}
				/>
				<button onClick={openForm}>Add More</button>
			</div>
		);
	}
};

export default EducationForm;
