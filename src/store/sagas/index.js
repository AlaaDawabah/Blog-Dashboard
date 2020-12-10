import { all } from "redux-saga/effects";
import { BlogsSagasWatch } from "./Blog";
export function* watchSagas() {
  yield all([
    BlogsSagasWatch()
  ]);
}
