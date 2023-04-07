const General = (props) => {
	return (
		<div>
			<h2>General Info</h2>
			<div data-obj-id={props.info.id}>
				<p>{props.info.name}</p>
				<p>Phone: {props.info.phone}</p>
				<p>Email: {props.info.email}</p>
				<button
					onClick={(e) => {
						props.editOnClick(
							e.currentTarget.parentNode.dataset.objId
						);
					}}>
					Edit
				</button>
			</div>
		</div>
	);
};

export default General;
