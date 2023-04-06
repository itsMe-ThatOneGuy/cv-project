import uniqid from "uniqid";

const Data = () => {
	const defaultSchoolData = () => {
		return {
			id: uniqid(),
			schoolName: "Test School",
			degree: "CIS",
			startDate: "2013",
			endDate: "2015",
		};
	};

	const defaultEmploymentData = () => {
		return {
			id: uniqid(),
			employer: "Test Employer",
			title: "Full Stack Developer",
			responsibilities: "Coding all the things",
			startDate: "2020",
			endDate: "2023",
		};
	};

	return { defaultSchoolData, defaultEmploymentData };
};

export default Data;
