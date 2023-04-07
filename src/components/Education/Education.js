const Education = (props) => {
	return (
		<div>
			<h2>Education Info</h2>
			{props.info.map((school) => {
				return (
					<div key={school.id} data-obj-id={school.id}>
						<p>{school.schoolName}</p>
						<p>Degree: {school.degree}</p>
						<p>Start Date: {school.startDate}</p>
						<p>End Date: {school.endDate}</p>
						<button
							onClick={(e) =>
								props.editOnClick(
									e.currentTarget.parentNode.dataset.objId
								)
							}>
							Edit
						</button>
						<button
							onClick={(e) =>
								props.deleteOnclick(
									e.currentTarget.parentNode.dataset.objId
								)
							}>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Education;
