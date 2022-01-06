import {
	updateNodeActionCreator,
	updateTotalActionCreator,
	getPersonsActionCreator,
	createNodeActionCreator,
	clearNodeAndChildrenActionCreator
} from "./actionCreatorTypes";

export const clearNodeAndChildren: clearNodeAndChildrenActionCreator = (id) => {
	return {
		type: "CLEAR_NODE",
		id
	}
}

export const updateNode: updateNodeActionCreator = (data) => {
	return {
		type: "UPDATE_NODE",
		data: data
	};
};

export const updateTotal: updateTotalActionCreator = (data) => {
	return {
		type: "UPDATE_TOTAL",
		data: data
	};
};

export const getPersons: getPersonsActionCreator = () => {
	return {
		type: "GET_PERSONS",
	};
};

export const createNode: createNodeActionCreator = (parentId) => {
	return {
		type: "CREATE_NODE",
		parentId,
	};
};
