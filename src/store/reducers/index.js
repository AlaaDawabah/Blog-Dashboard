import { combineReducers } from "redux";
import {blogs} from "../reducers/Blog";
import {spinner} from "../reducers/Spinner";
const appReducer = combineReducers({blogs,spinner});

// TO RESET STORE TO ITS INITIAL STATE AFTER LOGOUT
export const rootReducer = (state, action) => {
  if (action.type === "RECEIVE_LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};
