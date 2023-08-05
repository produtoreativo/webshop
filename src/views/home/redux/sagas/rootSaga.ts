import { SagaIterator } from "redux-saga";
import { spawn } from "redux-saga/effects";
import { productsSaga } from "./searchSaga";
import { createOrderSaga } from "./createOrder";

export function* rootSaga(): SagaIterator {
  yield spawn(productsSaga);
  yield spawn(createOrderSaga);
}