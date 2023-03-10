import { createSlice } from '@reduxjs/toolkit';
import { signupUser, loginUser, logoutUser, refreshUser } from './authOperations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,

    extraReducers: builder => 
    builder
        .addCase(signupUser.pending, state => state)
        .addCase(signupUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.error = null;
        })
        .addCase(signupUser.rejected, (state, action) => {
            state.error = action.payload.message;
        })
        .addCase(loginUser.pending, state => state)
        .addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload.message;
        })
        .addCase(logoutUser.pending, state => state)
        .addCase(logoutUser.fulfilled, state => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.error = null;
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.error = action.payload.message;
        })
        .addCase(refreshUser.pending, state => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.error = null;
        })
        .addCase(refreshUser.rejected, (state, action) => {
            state.isRefreshing = false;
            state.error = action.payload.message;
        }),
});

export const authReducer = userSlice.reducer;