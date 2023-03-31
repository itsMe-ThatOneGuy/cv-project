const Employment = (props) => {
	return (
		<div>
			<h2>Employment Info</h2>
			{props.info.jobs.map((job) => {
				return (
					<div key={job.id}>
						<p>{job.employer}</p>
						<p>Title: {job.title}</p>
						<p>Responsibilities: {job.responsibilities}</p>
						<p>Start Date: {job.startDate}</p>
						<p>End Date: {job.endDate}</p>
						<button onClick={props.editOnClick} id={job.id}>
							Edit
						</button>
						<button onClick={props.deleteOnclick} id={`delete-${job.id}`}>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Employment;
