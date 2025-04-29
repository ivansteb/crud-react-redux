import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";
// El store será donde almacenaremos el estado de la aplicación

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// Necesitamos tipar el state
export type RootState = ReturnType<typeof store.getState>;
// Necesitamos tipar el dispatch
export type AppDispatch = typeof store.dispatch;
