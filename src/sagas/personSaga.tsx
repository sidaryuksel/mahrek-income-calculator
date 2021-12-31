import { takeEvery, put, call, StrictEffect } from "redux-saga/effects";
import { actionIds } from "../redux/actions/actionTypes";
import personApi from "./person-api";
import { AxiosResponse } from "axios";
import {
	createdPersonAction,
	deletedPersonAction,
	gotPersons,
	createPersonAction,
	deletePersonAction,
} from "../redux/actions/actionTypes";

// watchers

function* personSaga(): Generator<StrictEffect> {
	yield takeEvery(actionIds.CREATE_PERSON, createPersonWorker);
	yield takeEvery(actionIds.DELETE_PERSON, deletePersonWorker);
	yield takeEvery(actionIds.GET_PERSONS, getPersonsWorker);
}

// workers

function* createPersonWorker({ title }: createPersonAction) {
	// create person using api
	try {
		const response: AxiosResponse = yield call(personApi.post, "/person", {
			title: title,
		});
		switch (response.status) {
			case 201:
				const data: createdPersonAction = {
					type: "CREATED_PERSON",
					person: response.data.data.person,
				};
				yield put(data);
		}
	} catch (err) {}
	// update our redux store by dispatching a new action
}

function* deletePersonWorker({ id }: deletePersonAction) {
	try {
		const response: AxiosResponse = yield call(personApi.delete, `/person/${id}`);
		switch (response.status) {
			case 200:
				const data: deletedPersonAction = {
					type: "DELETED_PERSON",
					id,
				};
				yield put(data);
		}
	} catch (err) {}
}



function* getPersonsWorker() {
	try {
		const response: AxiosResponse = yield call(personApi.get, "/person");
		switch (response.status) {
			case 200:
				const data: gotPersons = {
					type: "GOT_PERSONS",
					persons: response.data.data.persons,
				};
				yield put(data);
		}
	} catch (err) {}
}

export default personSaga;