import { createSlice } from '@reduxjs/toolkit';
import {
  logOutUser,
  loginUser,
  reconnectCurrentUser,
  registrateUser,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  errorMessage: '',
  isLoading: false,
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
        state.isLoading = false;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.errorMessage = '';
        state.isLoading = false;
      })
      .addCase(logOutUser.fulfilled, (state, { payload }) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.errorMessage = '';
        state.isLoading = false;
      })

      .addCase(reconnectCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.errorMessage = '';
        state.isLoading = false;
      })

      .addMatcher(
        action => {
          return action.type.endsWith('/pending');
        },
        state => {
          return { ...state, isLoading: true };
        }
      )
      .addMatcher(
        action => {
          return action.type.endsWith('/rejected');
        },
        (state, { payload }) => {
          state.errorMessage = payload;
          state.isLoading = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
