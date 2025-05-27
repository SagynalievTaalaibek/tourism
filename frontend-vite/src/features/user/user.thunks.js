import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosApi from '../../shared/api/axiosApi.js';

import { unsetUser } from './user.slice.js';

export const login = createAsyncThunk(
	'users/login',
	async (loginMutation, { rejectWithValue }) => {
		try {
			const response = await axiosApi.post('/users/sessions', loginMutation);
			return response.data;
		} catch (e) {
			if (e.isAxiosError && e.response && e.response.status === 422) {
				return rejectWithValue(e.response.data);
			}
			throw e;
		}
	},
);

export const logout = createAsyncThunk(
	'users/logout',
	async (_, { getState, dispatch }) => {
		const token = getState().users.user?.token;
		await axiosApi.delete('/users/sessions', {
			headers: { Authorization: 'Bearer ' + token },
		});
		dispatch(unsetUser());
	},
);
