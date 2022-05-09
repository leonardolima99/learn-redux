import { createStore, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import countReducer from "./Counter/reducer";

import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  counter: countReducer,
});

const persistedReducer = persistReducer(
  {
    key: "redux2",
    storage,
  },
  rootReducer
);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);
