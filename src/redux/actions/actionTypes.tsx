import { person, data } from "./storeType";

// For Action Creator
export interface clearNodeAndChildrenAction {
	type: "CLEAR_NODE";
	id: string;
}

export interface clearedNodeAndChildrenAction {
	type: "CLEARED_NODE";
	persons: person[];
}

export interface updateNodeAction {
	type: "UPDATE_NODE";
	data: data;
}

export interface updateTotalAction {
	type: "UPDATE_TOTAL";
	data: data;
}

export interface createNodeAction {
	type: "CREATE_NODE";
	parentId: string;
}

export interface getPersons {
	type: "GET_PERSONS";
}

// For Reducers
export interface updatedNodeAction {
	type: "UPDATED_NODE";
	persons: person[];
}

export interface updatedTotalAction {
	type: "UPDATED_TOTAL";
	persons: person[];
}

// For Reducers
export interface createdNodeAction {
	type: "CREATED_NODE";
	persons: person[];
}

export interface gotPersons {
	type: "GOT_PERSONS";
	persons: person[];
}

export const actionIds = {
	CLEAR_NODE: "CLEAR_NODE",
	UPDATE_NODE: "UPDATE_NODE",
	UPDATE_TOTAL: "UPDATE_TOTAL",
	GET_PERSONS: "GET_PERSONS",
	CREATE_NODE: "CREATE_NODE"
};