import { configureStore, Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer from "./users/slice";
// El store será donde almacenaremos el estado de la aplicación

const persistenceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
  };

const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    const { type, payload } = action;

    next(action);

    if (type === "users/deleteUserById") {
      fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            toast.success("User has been deleted successfully");
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("Error deleting user");
        });
    }
  };

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      persistenceLocalStorageMiddleware,
      syncWithDatabaseMiddleware
    );
  },
});

// Necesitamos tipar el state
export type RootState = ReturnType<typeof store.getState>;
// Necesitamos tipar el dispatch
export type AppDispatch = typeof store.dispatch;
