import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions;
