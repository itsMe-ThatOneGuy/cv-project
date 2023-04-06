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
	const [objArray, setObjArray] = useState([defaultSchool]);
	const [displayForm, setDisplayForm] = useState(false);
	const [edit, setEdit] = useState(false);

	const openForm = () => {
		setDisplayForm(true);
	};

	const newStateObj = () => {
		setBuffer({
			id: uniqid(),
		});
	};

	const getIndexOfObj = (key) => {
		return objArray.findIndex((obj) => obj.id === key.id);
	};

	const deleteOnclick = (key) => {
		const selected = getSelectedId(key);
		const newArray = objArray.filter((obj) => obj.id !== selected.id);
		setObjArray(newArray);
	};

	const editOnClick = (key) => {
		loadBuffer(key);
		openForm();
	};

	const getSelectedId = (key) => {
		return objArray.filter((x) => x.id === key)[0];
	};

	const loadBuffer = (key) => {
		const selected = getSelectedId(key);
		setBuffer({ ...selected });
	};

	const handleChange = (key, value) => {
		setBuffer((buffer) => {
			return { ...buffer, [key]: value };
		});
	};

	const onSubmitForm = (e) => {
		e.preventDefault();
		let array = [...objArray];
		if (objArray.some((obj) => obj.id === buffer.id)) {
			array.splice(getIndexOfObj(buffer), 1, buffer);
		} else {
			array = objArray.concat(buffer);
		}
		setObjArray(array);
		setDisplayForm(false);
		newStateObj();
	};

	if (displayForm === true || objArray.length === 0) {
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
					info={objArray}
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
					info={objArray}
					editOnClick={editOnClick}
					deleteOnclick={deleteOnclick}
				/>
				<button onClick={openForm}>Add More</button>
			</div>
		);
	}
};

export default EducationForm;
