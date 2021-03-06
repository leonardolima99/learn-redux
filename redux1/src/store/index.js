import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import counterReducer from "./Counter/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const persistedReducer = persistReducer(
  {
    key: "redux1",
    storage,
  },
  rootReducer
);

export const store = createStore(persistedReducer);

export const persistedStore = persistStore(store);
