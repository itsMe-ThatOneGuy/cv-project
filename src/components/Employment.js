const Employment = (props) => {
	return (
		<div>
			<h2>Employment Info</h2>
			{props.info.map((job) => {
				return (
					<div key={job.id} data-obj-id={job.id}>
						<p>{job.employer}</p>
						<p>Title: {job.title}</p>
						<p>Responsibilities: {job.responsibilities}</p>
						<p>Start Date: {job.startDate}</p>
						<p>End Date: {job.endDate}</p>
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

export default Employment;
