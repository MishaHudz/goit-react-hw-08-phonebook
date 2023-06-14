import { createSlice } from '@reduxjs/toolkit';
import { logOutUser, loginUser, registrateUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  errorMessage: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registrateUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.errorMessage = '';
      })
      .addCase(registrateUser.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.errorMessage = '';
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      })
      .addCase(logOutUser.fulfilled, (state, { payload }) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.errorMessage = '';
      })
      .addCase(logOutUser.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
