import { configureStore } from "@reduxjs/toolkit";
/* import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; */

import counterReducer from "./Counter.store";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

/* const persistedReducer = persistReducer(
  {
    key: "redux3",
    storage,
  },
  rootReducer
); */
/* export const persistedStore = persistStore(store); */
