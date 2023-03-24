import { Component } from "react";
import General from "./General";

class GeneralForm extends Component {
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

	handelChange = (e) => {
		for (const [key] of Object.entries(this.state)) {
			if (e.target.id === `${key}Input`) {
				this.setState({
					[key]: e.target.value,
				});
			}
		}
	};

	onSubmitForm = (e) => {
		e.preventDefault();
		this.setState({
			edit: false,
		});
	};

	render() {
		if (!this.state.edit) {
			return <General info={this.state} func={this.editOnClick} />;
		} else {
			return (
				<div>
					<form onSubmit={this.onSubmitForm}>
						<label htmlFor="nameInput">Name:</label>
						<input
							onChange={this.handelChange}
							value={this.state.name}
							type="text"
							id="nameInput"
						/>
						<label htmlFor="phoneInput">Phone:</label>
						<input
							onChange={this.handelChange}
							value={this.state.phone}
							type="text"
							id="phoneInput"
						/>
						<label htmlFor="emailInput">Email:</label>
						<input
							onChange={this.handelChange}
							value={this.state.email}
							type="text"
							id="emailInput"
						/>
						<button type="submit">Save</button>
					</form>
				</div>
			);
		}
	}
}

export default GeneralForm;
