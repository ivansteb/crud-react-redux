import { configureStore, Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { rollbackUser } from "./users/slice";
// El store será donde almacenaremos el estado de la aplicación

const persistenceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
  };

const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    const { type, payload } = action;
    const previousState = store.getState();

    next(action);

    if (type === "users/deleteUserById") {
      const userIdToRemove = payload;
      const userToRemove = previousState.users.find(
        (user) => user.id === userIdToRemove
      );

      fetch(
        `https://jsonplaceholder.typicode.asdsads/users/${userIdToRemove}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => {
          if (res.ok) {
            toast.success("User has been deleted successfully");
          }
          throw new Error(`Error deleting user`);
        })
        .catch((err) => {
          if (userToRemove) store.dispatch(rollbackUser(userToRemove));
          toast.error(`Error deleting user ${userIdToRemove}`);
          console.error(err);
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
