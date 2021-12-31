import {
	deletePersonAction,
	createPersonAction,
	getPersons,
} from "./actionTypes";



export type deletePersonActionCreator = (id: string) => deletePersonAction;

export type createPersonActionCreator = (title: string) => createPersonAction;

export type getPersonsActionCreator = () => getPersons;