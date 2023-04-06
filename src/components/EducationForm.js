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
	const [schools, setSchools] = useState([]);
	const [displayForm, setDisplayForm] = useState(false);
	const [edit, setEdit] = useState(false);

	const openForm = () => {
		setDisplayForm({
			displayForm: true,
		});
	};

	//Need to change

	const deleteOnclick = (e) => {
		/*	
		const schoolId = e.target.id.replace("delete-", "");
		const newSchools = info.schools.filter(
			(school) => school.id !== schoolId
		);
		setInfo({
			...info,
			schools: newSchools,
		});
	*/
	};

	//Need to change

	const editOnClick = (e) => {
		/*	
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
	*/
	};

	//Need to test
	const handleChange = (key, value) => {
		setBuffer((buffer) => {
			return { ...buffer, [key]: value };
		});
	};

	//need to change
	const onSubmitForm = (e) => {
		e.preventDefault();
		console.log(buffer);
		/*	
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
	*/
	};

	if (displayForm === true || schools.length === 0) {
		return (
			<div>
				<h3>Add New Education Info</h3>
				<form onSubmit={onSubmitForm}>
					<label htmlFor="schoolNameInput">School:</label>
					<input
						onChange={(e) =>
							handleChange("schoolName", e.target.value)
						}
						value={buffer.schoolName}
						name="schoolName"
						type="text"
						id="schoolNameInput"
					/>
					<label htmlFor="degreeInput">Degree:</label>
					<input
						onChange={(e) => handleChange("degree", e.target.value)}
						value={buffer.degree}
						name="degree"
						type="text"
						id="degreeInput"
					/>
					<label htmlFor="startDateInput">Start Date:</label>
					<input
						onChange={(e) =>
							handleChange("startDate", e.target.value)
						}
						value={buffer.startDate}
						name="startDate"
						type="text"
						id="startDateInput"
					/>
					<label htmlFor="endDateInput">End Date:</label>
					<input
						onChange={(e) =>
							handleChange("endDate", e.target.value)
						}
						value={buffer.endDate}
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
