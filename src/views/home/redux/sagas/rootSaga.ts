import { SagaIterator } from "redux-saga";
import { spawn } from "redux-saga/effects";
import { productsSaga } from "./searchProductsSaga";
import { ordersSaga } from "./ordersSaga";

export function* rootSaga(): SagaIterator {
  yield spawn(productsSaga);
  yield spawn(ordersSaga);
}