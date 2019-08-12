import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import * as apiReducers from "./services/api/reducers";
import * as extractionReducers from "./services/api/extraction/reducers";

import extractionSaga from "./services/api/extraction/saga";

const rootReducer = combineReducers({
  ...apiReducers,
  ...extractionReducers,
});

function* rootSaga() {
  yield all([
    extractionSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);
