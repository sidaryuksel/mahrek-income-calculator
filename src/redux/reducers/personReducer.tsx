import { Reducer } from "redux";
import { person } from "../actions/storeType";
import {
	createdPersonAction,
	deletedPersonAction,
	gotPersons,
} from "../actions/actionTypes";

type actions =
	| createdPersonAction
	| deletedPersonAction
	| gotPersons;

const initialState: person[] = [];

const personReducer: Reducer<person[], actions> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case "CREATED_PERSON":
			return [...state, action.person];
		case "DELETED_PERSON":
			return [...state.filter((person) => person.id !== action.id)];
		case "GOT_PERSONS":
			return [...state, ...action.persons];
		default:
			return [...state];
	}
};

export default personReducer;