import {
	updatePersonActionCreator,
	getPersonsActionCreator,
} from "./actionCreatorTypes";


export const updatePerson: updatePersonActionCreator = (person) => {
	return {
		type: "UPDATE_PERSON",
		person,
	};
};

export const getPersons: getPersonsActionCreator = () => {
	return {
		type: "GET_PERSONS",
	};
};