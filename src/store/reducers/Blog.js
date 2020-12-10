import * as types from "../types/Blog";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const INITIAL_STATE = {
  blogsList: []
};
export const blogs = persistReducer(
  {
    key: "blogsList",
    storage
  },
  (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.BLOGS_LIST_RECIEVE:
        return {
          ...state,
          blogsList: action.payload
        };
      default:
        return state;
    }
  }
);
