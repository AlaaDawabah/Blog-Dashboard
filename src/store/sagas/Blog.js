import { call, put, takeLatest } from "redux-saga/effects";
import * as TYPES from "../types/Blog";
import * as ACTIONS from "../actions/Blog";
import * as API from "../../network/Blog"

function* getBlogsList({ payload }) {
  try {
    const response = yield call(API.getBlogsList);
    yield put(ACTIONS.blogsListRecieve(response));
  } catch (error) {}
}
function* addBlog({ payload }) {
  try {
    yield call(API.addBlog,payload);
  } catch (error) {}
}
function* editBlog({ payload }) {
  try {
   yield call(API.editBlog,payload);
  } catch (error) {}
}
export function* BlogsSagasWatch() {
  yield takeLatest(TYPES.GET_BLOGS_LIST, getBlogsList);
  yield takeLatest(TYPES.ADD_BLOG, addBlog);
  yield takeLatest(TYPES.EDIT_BLOG, editBlog);
}
