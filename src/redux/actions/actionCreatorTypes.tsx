import {
	updateNodeAction,
	updateTotalAction,
	getPersons,
	createNodeAction,
	clearNodeAndChildrenAction
} from "./actionTypes";
import {data} from './storeType';

export type clearNodeAndChildrenActionCreator = (id: string) => clearNodeAndChildrenAction;

export type updateNodeActionCreator = (data: data) => updateNodeAction;

export type updateTotalActionCreator = (data: data) => updateTotalAction;

export type createNodeActionCreator = (parentId: string) => createNodeAction;

export type getPersonsActionCreator = () => getPersons;