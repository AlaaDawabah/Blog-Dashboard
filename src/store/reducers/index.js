import { combineReducers } from "redux";
import {blogs} from "../reducers/Blog"
const appReducer = combineReducers({blogs});

// TO RESET STORE TO ITS INITIAL STATE AFTER LOGOUT
export const rootReducer = (state, action) => {
  if (action.type === "RECEIVE_LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};
