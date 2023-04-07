import { useState, useEffect } from "react";
import Education from "./Education";
import uniqid from "uniqid";
import { defaultSchoolData } from "./Data";

const EducationForm = () => {
	const [buffer, setBuffer] = useState({});
	const [objArray, setObjArray] = useState([defaultSchoolData]);
	const [displayForm, setDisplayForm] = useState(false);
	const [formType, setFormType] = useState(null);

	useEffect(() => {
		newBufferObj();
	}, []);

	const openForm = () => {
		setDisplayForm(true);
	};

	const resetForm = () => {
		setDisplayForm(false);
		setFormType(null);
	};

	const newBufferObj = () => {
		setBuffer({
			id: uniqid(),
			schoolName: "",
			degree: "",
			startDate: "",
			endDate: "",
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

	const addOnClick = () => {
		openForm();
		setFormType("add");
	};

	const editOnClick = (key) => {
		if (displayForm === false) {
			loadBuffer(key);
			openForm();
			setFormType("edit");
		}
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
		resetForm();
		newBufferObj();
	};

	if (displayForm === true || objArray.length === 0) {
		return (
			<div>
				{formType === "add" ? (
					<h3>Add New Education Info</h3>
				) : (
					<h3>Edit Education Info</h3>
				)}
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
				<button onClick={addOnClick}>Add More</button>
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
				<button onClick={addOnClick}>Add More</button>
			</div>
		);
	}
};

export default EducationForm;
