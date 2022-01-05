import { Reducer } from "redux";
import { person } from "../actions/storeType";
import {
	updatedPersonAction,
	gotPersons,
} from "../actions/actionTypes";

type actions =
	| updatedPersonAction
	| gotPersons;

const initialState: person[] = [];

const personReducer: Reducer<person[], actions> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case "UPDATED_PERSON":
			return [...state, action.person];
		case "GOT_PERSONS":
			console.log("reducer: ",action.persons);
			return [...action.persons];
		default:
			return [...state];
	}
};

export default personReducer;