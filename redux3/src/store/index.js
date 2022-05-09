import { createStore, combineReducers } from "redux";

import counterReducer from "./Counter/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(rootReducer);
