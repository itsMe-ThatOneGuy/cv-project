import React from "react";

const General = (props) => {
	return (
		<div>
			<h2>General Info</h2>
			<div>
				<p>{props.info.name}</p>
				<p>Phone: {props.info.phone}</p>
				<p>Email: {props.info.email}</p>
				<button onClick={props.func}>Edit</button>
			</div>
		</div>
	);
};

export default General;
