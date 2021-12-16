import { tickNextTime } from "./actions";
import { put, all, select } from "redux-saga/effects";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* tickLoop() {
  while (true) {
    yield delay(1000);
    yield put(tickNextTime());
  }
}

export default function* rootSaga() {
  yield all([tickLoop()]);
}
