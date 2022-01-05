import {
	updateNodeActionCreator,
	getPersonsActionCreator,
	createNodeActionCreator,
} from "./actionCreatorTypes";


export const updateNode: updateNodeActionCreator = (data) => {
	return {
		type: "UPDATE_NODE",
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
