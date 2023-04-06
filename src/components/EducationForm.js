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

	const [buffer, setBuffer] = useState({
		id: uniqid(),
		schoolName: "",
		degree: "",
		startDate: "",
		endDate: "",
	});
	const [schools, setSchools] = useState([defaultSchool]);
	const [displayForm, setDisplayForm] = useState(false);
	const [edit, setEdit] = useState(false);

	const openForm = () => {
		setDisplayForm(true);
	};

	const newStateObj = () => {
		setBuffer({ id: uniqid() });
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

	const loadBuffer = (key) => {
		const selected = schools.filter((x) => x.id === key)[0];
		setBuffer({ ...selected });
	};

	//Need to change
	const editOnClick = (e) => {
		console.log(e.target.parentNode);
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
		const array = schools.concat(buffer);
		setSchools(array);
		setDisplayForm(false);
		newStateObj();
	};

	if (displayForm === true || schools.length === 0) {
		return (
			<div>
				<h3>Add New Education Info</h3>
				<form onSubmit={onSubmitForm}>
					<p>
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
					</p>
					<p>
						<label htmlFor="degreeInput">Degree:</label>
						<input
							onChange={(e) =>
								handleChange("degree", e.target.value)
							}
							value={buffer.degree}
							name="degree"
							type="text"
							id="degreeInput"
						/>
					</p>
					<p>
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
					</p>
					<p>
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
					</p>
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
					loadBuffer={loadBuffer}
					deleteOnclick={deleteOnclick}
				/>
				<button onClick={openForm}>Add More</button>
			</div>
		);
	}
};

export default EducationForm;
