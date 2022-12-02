import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type User = {
	name: string;
	password: string;
};

const initialState: User = {
	name: "",
	password: "",
};

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<User>) => {
			state.name = action.payload.name;
			state.password = action.payload.password;
		},
		logout: (state) => {
			state.name = "";
			state.password = "";
		},
	},
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
