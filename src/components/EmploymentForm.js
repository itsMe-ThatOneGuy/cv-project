import { useState, useEffect } from "react";
import Employment from "./Employment";
import { defaultEmploymentData, defautlEmploymentBuffer } from "./Data";

const EmploymentForm = () => {
	const [buffer, setBuffer] = useState({});
	const [objArray, setObjArray] = useState([defaultEmploymentData]);
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
			...defautlEmploymentBuffer,
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
				<Employment
					info={objArray}
					editOnClick={editOnClick}
					deleteOnclick={deleteOnclick}
				/>
				<button onClick={addOnClick}>Add More</button>
				{formType === "add" ? (
					<h3>Add New Employment Info</h3>
				) : (
					<h3>Edit Employment Info</h3>
				)}
				<form onSubmit={onSubmitForm}>
					<p>
						<label htmlFor="employerInput">Employer:</label>
						<input
							onChange={(e) =>
								handleChange("employer", e.target.value)
							}
							value={buffer.employer}
							name="employer"
							type="text"
							id="employerInput"
						/>
					</p>
					<p>
						<label htmlFor="titleInput">Title:</label>
						<input
							onChange={(e) =>
								handleChange("title", e.target.value)
							}
							value={buffer.title}
							name="title"
							type="text"
							id="titleInput"
						/>
					</p>
					<p>
						<label htmlFor="responsibilitiesInput">
							Responsibilities:
						</label>
						<input
							onChange={(e) =>
								handleChange("responsibilities", e.target.value)
							}
							value={buffer.responsibilities}
							name="responsibilities"
							type="text"
							id="responsibilitiesInput"
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
			</div>
		);
	} else {
		return (
			<div>
				<Employment
					info={objArray}
					editOnClick={editOnClick}
					deleteOnclick={deleteOnclick}
				/>
				<button onClick={addOnClick}>Add More</button>
			</div>
		);
	}
};

export default EmploymentForm;
