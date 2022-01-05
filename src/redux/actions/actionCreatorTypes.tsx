import {
	updateNodeAction,
	getPersons,
	createNodeAction,
	clearNodeAndChildrenAction
} from "./actionTypes";
import {data} from './storeType';

export type clearNodeAndChildrenActionCreator = (id: string) => clearNodeAndChildrenAction;

export type updateNodeActionCreator = (data: data) => updateNodeAction;

export type createNodeActionCreator = (parentId: string) => createNodeAction;

export type getPersonsActionCreator = () => getPersons;