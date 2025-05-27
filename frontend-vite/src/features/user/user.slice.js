import { createSlice } from '@reduxjs/toolkit';

import { login, logout } from './user.thunks.js';

const initialState = {
	user: null,
	loading: false,
	error: null,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		unsetUser(state) {
			state.user = null;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(login.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload || action.error.message;
			})

			.addCase(logout.fulfilled, state => {
				state.user = null;
			});
	},
});

export const userReducer = usersSlice.reducer;
export const { unsetUser } = usersSlice.actions;
export const selectUser = state => state.auth.user;
export const selectUserLoading = state => state.auth.loading;
