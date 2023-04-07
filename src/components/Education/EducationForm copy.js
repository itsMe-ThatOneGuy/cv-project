import React from "react";

const EducationForm = (props) => {
	if (props.displayForm === true) {
		return (
			<div>
				<h3>Add New Education Info</h3>
				<form onSubmit={props.onSubmitForm}>
					<p>
						<label htmlFor="schoolNameInput">School:</label>
						<input
							onChange={(e) =>
								props.handleChange("schoolName", e.target.value)
							}
							value={props.buffer.schoolName}
							name="schoolName"
							type="text"
							id="schoolNameInput"
						/>
					</p>
					<p>
						<label htmlFor="degreeInput">Degree:</label>
						<input
							onChange={(e) =>
								props.handleChange("degree", e.target.value)
							}
							value={props.buffer.degree}
							name="degree"
							type="text"
							id="degreeInput"
						/>
					</p>
					<p>
						<label htmlFor="startDateInput">Start Date:</label>
						<input
							onChange={(e) =>
								props.handleChange("startDate", e.target.value)
							}
							value={props.buffer.startDate}
							name="startDate"
							type="text"
							id="startDateInput"
						/>
					</p>
					<p>
						<label htmlFor="endDateInput">End Date:</label>
						<input
							onChange={(e) =>
								props.handleChange("endDate", e.target.value)
							}
							value={props.buffer.endDate}
							name="endDate"
							type="text"
							id="endDateInput"
						/>
					</p>
					<button type="submit">Save</button>
				</form>
			</div>
		);
	}
};

export default EducationForm;
