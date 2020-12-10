import { call, put, takeLatest } from "redux-saga/effects";
import * as TYPES from "../types/Blog";
import * as ACTIONS from "../actions/Blog";
import * as API from "../../network/Blog"

function* getBlogsList({ payload }) {
  try {
    const response = yield call(API.getBlogsList);
    console.log("response", response)
    yield put(ACTIONS.blogsListRecieve(response));
  } catch (error) {}
}
function* addBlog({ payload }) {
  console.log("saga",payload)
  try {
    const response = yield call(API.addBlog,payload);
    // console.log("response", response)
    // yield put(ACTIONS.blogsListRecieve(response));
  } catch (error) {}
}
export function* BlogsSagasWatch() {
  yield takeLatest(TYPES.GET_BLOGS_LIST, getBlogsList);
  yield takeLatest(TYPES.ADD_BLOG, addBlog);
}
