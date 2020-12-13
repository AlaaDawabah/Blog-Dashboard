import * as types from "../types/Spinner";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const INITIAL_STATE = {
  loader: false
};
export const spinner = persistReducer(
  {
    key: "spinner",
    storage
  },
  (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.SET_LOADER:
        return {
          ...state,
          loader: action.payload
        };
      default:
        return state;
    }
  }
);
