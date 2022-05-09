import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: null,
});

export const store = createStore(rootReducer);
