import { takeEvery, takeLatest, put, call, StrictEffect } from "redux-saga/effects";
import { actionIds } from "../redux/actions/actionTypes";
import personApi from "./person-api";
import { AxiosResponse } from "axios";
import {
	updatedNodeAction,
	updateNodeAction,
	createNodeAction,
	createdNodeAction,	
	gotPersons,
	clearNodeAndChildrenAction,
	clearedNodeAndChildrenAction
} from "../redux/actions/actionTypes";

// watchers

function* personSaga(): Generator<StrictEffect> {
	yield takeEvery(actionIds.UPDATE_NODE, updateNodeWorker);
	yield takeEvery(actionIds.GET_PERSONS, getPersonsWorker);
	yield takeLatest(actionIds.CREATE_NODE, createNodeWorker);
	yield takeEvery(actionIds.CLEAR_NODE, clearedNodeAndChildrenWorker);
}

// workers
function* clearedNodeAndChildrenWorker({id}: clearNodeAndChildrenAction) {
	console.log("saga id:", id);

	try {
		const response: AxiosResponse = yield call(personApi.delete, `/${id}`);
		switch (response.status) {
			case 201:
				const updateData: clearedNodeAndChildrenAction = {
					type: "CLEARED_NODE",
					persons: response.data.person,		//here is the data from mongodb, person
				};
				yield put(updateData);
		}
	} catch (err) {}
}
	

function* updateNodeWorker({ data }: updateNodeAction) {

	// create person using api		
	//person.children?.push({name: "", price: 0, children: []});
	console.log("update saga:", data);

	try {
		const response: AxiosResponse = yield call(personApi.put, `/${data.id}`, {
			data
		});
		switch (response.status) {
			case 201:
				const updateData: updatedNodeAction = {
					type: "UPDATED_NODE",
					persons: response.data.person,		//here is the data from mongodb, person
				};
				yield put(updateData);
		}
	} catch (err) {}
	// update our redux store by dispatching a new action
}
function* createNodeWorker({parentId}: createNodeAction) {
console.log("saga parentID: " , parentId);
	try {
		const response: AxiosResponse = yield call(personApi.post, "/node", {
			parentId,
		});
		switch (response.status) {
			case 201:
				const data: createdNodeAction = {
					type: "CREATED_NODE",
					persons: response.data.person,		//here is the data from mongodb, person
				};
				yield put(data);
		}
	} catch (err) {}
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