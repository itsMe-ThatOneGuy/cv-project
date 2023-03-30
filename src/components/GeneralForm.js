import General from "./General";
import { useState } from "react";

const GeneralForm = () => {
	const [info, setInfo] = useState({
		name: "Jone Doe",
		phone: "(123) 123-1234",
		email: "jonedoe123@gmail.com",
		edit: false,
	});

	const editOnClick = () => {
		if (!info.edit) {
			setInfo({
				...info,
				edit: true,
			});
		} else {
			setInfo({
				...info,
				edit: false,
			});
		}
	};

	const handelChange = (e) => {
		for (const [key] of Object.entries(info)) {
			if (e.target.id === `${key}Input`) {
				setInfo({
					...info,
					[key]: e.target.value,
				});
			}
		}
	};

	const onSubmitForm = (e) => {
		e.preventDefault();
		setInfo({
			...info,
			edit: false,
		});
	};

	if (!info.edit) {
		return <General info={info} func={editOnClick} />;
	} else {
		return (
			<div>
				<h2>General Info</h2>
				<form onSubmit={onSubmitForm}>
					<label htmlFor="nameInput">Name:</label>
					<input
						onChange={handelChange}
						value={info.name}
						type="text"
						id="nameInput"
					/>
					<label htmlFor="phoneInput">Phone:</label>
					<input
						onChange={handelChange}
						value={info.phone}
						type="text"
						id="phoneInput"
					/>
					<label htmlFor="emailInput">Email:</label>
					<input
						onChange={handelChange}
						value={info.email}
						type="text"
						id="emailInput"
					/>
					<button type="submit">Save</button>
				</form>
			</div>
		);
	}
};

export default GeneralForm;
