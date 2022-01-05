import { Reducer } from "redux";
import { person } from "../actions/storeType";
import {
	updatedNodeAction,
	gotPersons,
	createdNodeAction,
} from "../actions/actionTypes";

type actions =
	| updatedNodeAction
	| createdNodeAction
	| gotPersons;

const initialState: person[] = [];

const personReducer: Reducer<person[], actions> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case "UPDATED_NODE":
		case "CREATED_NODE":
		case "GOT_PERSONS":
			console.log("reducer: ",action.persons);
			return [...action.persons];
		default:
			return [...state];
	}
};

export default personReducer;