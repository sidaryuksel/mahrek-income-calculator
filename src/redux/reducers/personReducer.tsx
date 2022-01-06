import { Reducer } from "redux";
import { person } from "../actions/storeType";
import {
	updatedNodeAction,
	updatedTotalAction,
	gotPersons,
	createdNodeAction,
	clearedNodeAndChildrenAction,
} from "../actions/actionTypes";

type actions =
	| clearedNodeAndChildrenAction
	| updatedNodeAction
	| updatedTotalAction
	| createdNodeAction
	| gotPersons;

const initialState: person[] = [];

const personReducer: Reducer<person[], actions> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case "UPDATED_TOTAL":
		case "CLEARED_NODE":
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