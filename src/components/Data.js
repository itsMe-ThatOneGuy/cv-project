import uniqid from "uniqid";

const defaultSchoolData = {
	id: uniqid(),
	schoolName: "Test School",
	degree: "CIS",
	startDate: "2013",
	endDate: "2015",
};

const defaultEmploymentData = {
	id: uniqid(),
	employer: "Test Employer",
	title: "Full Stack Developer",
	responsibilities: "Coding all the things",
	startDate: "2020",
	endDate: "2023",
};

const defautlEducationBuffer = {
	id: uniqid(),
	schoolName: "",
	degree: "",
	startDate: "",
	endDate: "",
};

const defautlEmploymentBuffer = {
	id: uniqid(),
	employer: "",
	title: "",
	responsibilities: "",
	startDate: "",
	endDate: "",
};

export {
	defaultSchoolData,
	defaultEmploymentData,
	defautlEducationBuffer,
	defautlEmploymentBuffer,
};
