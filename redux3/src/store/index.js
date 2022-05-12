import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import counterReducer from "./Counter.store";

const reducers = combineReducers({
  counter: counterReducer,
});

const persistedReducer = persistReducer(
  {
    key: "redux3",
    storage,
  },
  reducers
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistedStore = persistStore(store);
