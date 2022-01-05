import {
	updatePersonAction,
	getPersons,
} from "./actionTypes";
import {person} from './storeType';

export type updatePersonActionCreator = (person: person) => updatePersonAction;

export type getPersonsActionCreator = () => getPersons;