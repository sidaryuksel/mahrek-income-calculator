import {
	deletePersonActionCreator,
	createPersonActionCreator,
	getPersonsActionCreator,
} from "./actionCreatorTypes";

export const deletePerson: deletePersonActionCreator = (id) => {
	return {
		type: "DELETE_PERSON",
		id,
	};
};

export const createPerson: createPersonActionCreator = (title) => {
	return {
		type: "CREATE_PERSON",
		title,
	};
};

export const getPersons: getPersonsActionCreator = () => {
	return {
		type: "GET_PERSONS",
	};
};