import { useState, useEffect } from "react";
import Education from "./Education";
import uniqid from "uniqid";
import { defaultSchoolData, defautlEducationBuffer } from "../Utilities/Data";
import { useUtils } from "../Utilities/Utilities";

const EducationForm = () => {
	const [buffer, setBuffer] = useState({});
	const [objArray, setObjArray] = useState([defaultSchoolData]);
	const [displayForm, setDisplayForm] = useState(false);
	const [formType, setFormType] = useState(null);

	useEffect(() => {
		useUtils().newBufferObj();
	}, []);

	return (
		<div>
			<Education
				info={objArray}
				editOnClick={useUtils().editOnClick}
				deleteOnclick={useUtils().deleteOnclick}
			/>
			<EducationForm
				displayForm={displayForm}
				buffer={buffer}
				onSubmitForm={useUtils().onSubmitForm}
				handleChange={useUtils().handleChange}
			/>
			<button onClick={useUtils().addOnClick}>Add More</button>
		</div>
	);
};

export default EducationContainer;
