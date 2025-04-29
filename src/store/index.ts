import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";
// El store será donde almacenaremos el estado de la aplicación

const persistenceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistenceLocalStorageMiddleware);
  },
});

// Necesitamos tipar el state
export type RootState = ReturnType<typeof store.getState>;
// Necesitamos tipar el dispatch
export type AppDispatch = typeof store.dispatch;
