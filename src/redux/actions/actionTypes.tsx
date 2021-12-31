import { person } from "./storeType";

// For Action Creator
export interface deletePersonAction {
	type: "DELETE_PERSON";
	id: string;
}

export interface createPersonAction {
	type: "CREATE_PERSON";
	title: string;
}

export interface getPersons {
	type: "GET_PERSONS";
}

// For Reducers
export interface createdPersonAction {
	type: "CREATED_PERSON";
	person: person;
}

export interface deletedPersonAction {
	type: "DELETED_PERSON";
	id: string;
}

export interface gotPersons {
	type: "GOT_PERSONS";
	persons: person[];
}

export const actionIds = {
	DELETE_PERSON: "DELETE_PERSON",
	CREATE_PERSON: "CREATE_PERSON",
	GET_PERSONS: "GET_PERSONS",
};