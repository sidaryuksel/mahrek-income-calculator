import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducers from "./redux/reducers";
import personSaga from "./sagas/personSaga";
//import 'https://js.pusher.com/7.0/pusher.min.js';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(personSaga);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
