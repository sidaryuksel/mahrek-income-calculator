import { person } from "./storeType";

// For Action Creator

export interface updatePersonAction {
	type: "UPDATE_PERSON";
	person: person;
}

export interface getPersons {
	type: "GET_PERSONS";
}

// For Reducers
export interface updatedPersonAction {
	type: "UPDATED_PERSON";
	person: person;
}

export interface gotPersons {
	type: "GOT_PERSONS";
	persons: person[];
}

export const actionIds = {
	UPDATE_PERSON: "UPDATE_PERSON",
	GET_PERSONS: "GET_PERSONS",
};