import React from "react";
import "./App.css";
import EducationForm from "./components/Education/EducationForm";
import EmploymentForm from "./components/Employment/EmploymentForm";
import GeneralForm from "./components/General/GeneralForm";

const App = () => {
	return (
		<div className="App">
			<header>
				<h1>CV-App</h1>
			</header>
			<GeneralForm />
			<EducationForm />
			<EmploymentForm />
			<footer>
				<p>
					Copyright © 2023{" "}
					<a
						href="https://github.com/itsMe-ThatOneGuy"
						target="_blank"
						rel="noreferrer">
						itsMe-ThatOneGuy
					</a>
				</p>
			</footer>
		</div>
	);
};

export default App;
