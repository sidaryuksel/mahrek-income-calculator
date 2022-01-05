import {
	updateNodeAction,
	getPersons,
	createNodeAction,
} from "./actionTypes";
import {data} from './storeType';

export type updateNodeActionCreator = (data: data) => updateNodeAction;

export type createNodeActionCreator = (parentId: string) => createNodeAction;

export type getPersonsActionCreator = () => getPersons;