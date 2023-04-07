import General from "./General";
import { useState } from "react";
import { defaultGeneralInfoData } from "./Data";

const GeneralForm = () => {
	const [buffer, setBuffer] = useState({});
	const [objArray, setObjArray] = useState([defaultGeneralInfoData]);
	const [displayForm, setDisplayForm] = useState(false);
	const [formType, setFormType] = useState(null);

	const openForm = () => {
		setDisplayForm(true);
	};

	const resetForm = () => {
		setDisplayForm(false);
		setFormType(null);
	};

	const getIndexOfObj = (key) => {
		return objArray.findIndex((obj) => obj.id === key.id);
	};

	const editOnClick = (key) => {
		if (displayForm === false) {
			loadBuffer(key);
			openForm();
			setFormType("Edit");
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
	};

	if (displayForm === false) {
		return <General info={objArray[0]} editOnClick={editOnClick} />;
	} else {
		return (
			<div>
				<h2>{formType} General Info</h2>
				<form onSubmit={onSubmitForm}>
					<p>
						<label htmlFor="nameInput">Name:</label>
						<input
							onChange={(e) =>
								handleChange("name", e.target.value)
							}
							value={buffer.name}
							name="name"
							type="text"
							id="nameInput"
						/>
					</p>
					<p>
						<label htmlFor="phoneInput">Phone:</label>
						<input
							onChange={(e) =>
								handleChange("phone", e.target.value)
							}
							value={buffer.phone}
							name="phone"
							type="text"
							id="phoneInput"
						/>
					</p>
					<p>
						<label htmlFor="emailInput">Email:</label>
						<input
							onChange={(e) =>
								handleChange("email", e.target.value)
							}
							value={buffer.email}
							name="email"
							type="text"
							id="emailInput"
						/>
					</p>
					<button type="submit">Save</button>
				</form>
			</div>
		);
	}
};

export default GeneralForm;
