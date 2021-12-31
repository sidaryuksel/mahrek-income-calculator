import { person } from "../redux/actions/storeType";
import {
	deletePersonActionCreator,
	createPersonActionCreator,
	getPersonsActionCreator,
} from "../redux/actions/actionCreatorTypes";

interface AppPropType {
	persons: person[];
	deletePerson: deletePersonActionCreator;
	createPerson: createPersonActionCreator;
	getPersons: getPersonsActionCreator;
}

export default AppPropType;