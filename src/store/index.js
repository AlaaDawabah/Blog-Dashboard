import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watchSagas } from "./sagas";
import { persistStore } from "redux-persist";
const saga = createSagaMiddleware();
//redux dev tool
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(saga));

export const store = createStore(rootReducer, enhancer);

// CREATE PERSIST_REDUX
export const persistor = persistStore(store);

saga.run(watchSagas);

export default store;
