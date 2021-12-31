import { combineReducers } from "redux";

import personReducer from "./personReducer";

const store = {
	persons: personReducer,
};

export default combineReducers(store);