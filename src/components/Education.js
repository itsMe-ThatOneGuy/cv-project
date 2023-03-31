const Education = (props) => {
	return (
		<div>
			<h2>Education Info</h2>
			{props.info.schools.map((school) => {
				return (
					<div key={school.id}>
						<p>{school.schoolName}</p>
						<p>Degree: {school.degree}</p>
						<p>Start Date: {school.startDate}</p>
						<p>End Date: {school.endDate}</p>
						<button onClick={props.editOnClick} id={school.id}>
							Edit
						</button>
						<button onClick={props.deleteOnclick} id={`delete-${school.id}`}>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Education;
