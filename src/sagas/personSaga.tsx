import { takeEvery, put, call, StrictEffect } from "redux-saga/effects";
import { actionIds } from "../redux/actions/actionTypes";
import personApi from "./person-api";
import { AxiosResponse } from "axios";
import {
	updatedPersonAction,
	gotPersons,
	updatePersonAction,
} from "../redux/actions/actionTypes";

// watchers

function* personSaga(): Generator<StrictEffect> {
	yield takeEvery(actionIds.UPDATE_PERSON, updatePersonWorker);
	yield takeEvery(actionIds.GET_PERSONS, getPersonsWorker);
}

// workers

function* updatePersonWorker({ person }: updatePersonAction) {
	// create person using api		
	person.children?.push({name: "", price: 0, children: []});
	console.log("update saga:", person);

	try {
		const response: AxiosResponse = yield call(personApi.put, "/update", {
			person: person,
		});
		switch (response.status) {
			case 201:
				const data: updatedPersonAction = {
					type: "UPDATED_PERSON",
					person: response.data.person,		//here is the data from mongodb, person
				};
				yield put(data);
		}
	} catch (err) {}
	// update our redux store by dispatching a new action
}

function* getPersonsWorker() {
	try {
		const response: AxiosResponse = yield call(personApi.get, "/");
		switch (response.status) {
			case 200:
				const data: gotPersons = {
					type: "GOT_PERSONS",
					persons: response.data.data,
				};
				console.log(data);
				yield put(data);
		}
	} catch (err) {}
}

export default personSaga;