import { person } from "../redux/actions/storeType";
import {
	updateNodeActionCreator,
	getPersonsActionCreator,
} from "../redux/actions/actionCreatorTypes";

export interface AppPropType {
	persons: person[];
	getPersons: getPersonsActionCreator;
}

export interface CardPropType {
	persons: person[];
}

export interface Nodes {
	tree: person;
	updatePerson: updateNodeActionCreator;
}