import uniqid from "uniqid";

const defaultGeneralInfoData = {
	id: uniqid(),
	name: "Jone Doe",
	phone: "(123) 123-1234",
	email: "jonedoe123@gmail.com",
};

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
	schoolName: "",
	degree: "",
	startDate: "",
	endDate: "",
};

const defautlEmploymentBuffer = {
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
	defaultGeneralInfoData,
};
