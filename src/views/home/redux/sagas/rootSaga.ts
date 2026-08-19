import { SagaIterator } from "redux-saga";
import { spawn } from "redux-saga/effects";
import { productsSaga } from "./SearchSaga";
import { ordersSaga } from "./ordersSaga";
import { catalogoSaga } from "./catalogoSaga";

export function* rootSaga(): SagaIterator {
  yield spawn(productsSaga);
  yield spawn(ordersSaga);
  yield spawn(catalogoSaga);
}
