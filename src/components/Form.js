import { Component } from "react";
import General from "./General";

class Form extends Component {
	constructor() {
		super();

		this.state = {
			name: "Jone Doe",
			phone: "(123) 123-1234",
			email: "jonedoe123@gmail.com",
			edit: false,
		};

		this.editOnClick = this.editOnClick.bind(this);
	}

	editOnClick = () => {
		if (!this.state.edit) {
			this.setState({
				edit: true,
			});
		} else {
			this.setState({
				edit: false,
			});
		}
	};

	render() {
		if (!this.state.edit) {
			return <General info={this.state} func={this.editOnClick} />;
		} else {
			return (
				<div>
					<form>
						<label htmlFor="nameInput">Name:</label>
						<input value={this.state.name} type="text" id="nameInput" />
						<label htmlFor="phoneInput">Phone:</label>
						<input value={this.state.phone} type="text" id="phoneInput" />
						<label htmlFor="emailInput">Email:</label>
						<input value={this.state.email} type="text" id="emailInput" />
						<button type="submit">Save</button>
					</form>
				</div>
			);
		}
	}
}

export default Form;
