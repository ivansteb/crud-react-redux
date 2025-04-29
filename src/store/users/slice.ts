import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
  {
    id: "1",
    name: "Ivan Stebler",
    email: "ivanstebler@emailprovider.com",
    github: "ivansteb",
  },
  {
    id: "2",
    name: "Carlos Rodriguez",
    email: "carlos.rodriguez@emailprovider.com",
    github: "carlosrodriguez",
  },
  {
    id: "3",
    name: "Diana Chen",
    email: "diana.chen@emailprovider.com",
    github: "dianachen",
  },
  {
    id: "4",
    name: "Hannah Kim",
    email: "hannah.kim@emailprovider.com",
    github: "hannahkim",
  },
  {
    id: "5",
    name: "Ian Patel",
    email: "ian.patel@emailprovider.com",
    github: "ianpatel",
  },
  {
    id: "6",
    name: "Julia Martinez",
    email: "julia.martinez@emailprovider.com",
    github: "juliamartinez",
  },
  {
    id: "7",
    name: "Kevin Wong",
    email: "kevin.wong@emailprovider.com",
    github: "kevinwong",
  },
];

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

// IIFE: Immediately Invoked Function Expression -> Función que se ejecuta inmediatamente
// Se ejecuta al cargar el módulo y se guarda el estado inicial en la variable initialState
const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  if (persistedState) {
    return JSON.parse(persistedState).users;
  }
  return DEFAULT_STATE;
})();

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }];
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
    rollbackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserAlreadyDefined = state.some(
        (user) => user.id === action.payload.id
      );
      if (!isUserAlreadyDefined) {
        return [...state, action.payload];
      }
    },
  },
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;
