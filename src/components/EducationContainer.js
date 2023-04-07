import { useState, useEffect } from "react";
import Education from "./Education";
import EducationForm from "./EducationForm copy";
import uniqid from "uniqid";
import { defaultSchoolData } from "./Data";

const EducationContainer = () => {
	const [buffer, setBuffer] = useState({});
	const [objArray, setObjArray] = useState([defaultSchoolData]);
	const [displayForm, setDisplayForm] = useState(false);

	useEffect(() => {
		newBufferObj();
	}, []);

	const openForm = () => {
		setDisplayForm(true);
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
		newBufferObj();
	};

	return (
		<div>
			<Education
				info={objArray}
				editOnClick={editOnClick}
				deleteOnclick={deleteOnclick}
			/>
			<EducationForm
				displayForm={displayForm}
				buffer={buffer}
				onSubmitForm={onSubmitForm}
				handleChange={handleChange}
			/>
			<button onClick={openForm}>Add More</button>
		</div>
	);
};

export default EducationContainer;
