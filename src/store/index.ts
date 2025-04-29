import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";
// El store será donde almacenaremos el estado de la aplicación

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log(action);
  next(action);
  console.log(store.getState());
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware);
  },
});

// Necesitamos tipar el state
export type RootState = ReturnType<typeof store.getState>;
// Necesitamos tipar el dispatch
export type AppDispatch = typeof store.dispatch;
