import { SagaIterator } from "redux-saga";
import { spawn } from "redux-saga/effects";
import { productsSaga } from "./searchSaga";

export function* rootSaga(): SagaIterator {
  yield spawn(productsSaga);
}