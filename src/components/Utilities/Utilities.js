export function useUtils() {
	const openForm = () => {
		setDisplayForm(true);
	};

	const resetForm = () => {
		setDisplayForm(false);
		setFormType(null);
	};

	const newBufferObj = () => {
		setBuffer({
			...defautlEducationBuffer,
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

	return {
		deleteOnclick,
		addOnClick,
		editOnClick,
		handleChange,
		onSubmitForm,
		newBufferObj,
	};
}
