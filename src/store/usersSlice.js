import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: state => {
      return { ...state, isLoading: true };
    },
    [fetchContacts.fulfilled]: (_, { payload }) => {
      return { items: payload, isLoading: false, error: null };
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      return { ...state, isLoading: false, error: payload };
    },

    [addContact.pending]: state => {
      return { ...state, isLoading: true };
    },
    [addContact.fulfilled]: (state, { payload }) => {
      return {
        items: [...state.items, payload],
        isLoading: false,
        error: null,
      };
    },
    [addContact.rejected]: (state, { payload }) => {
      return { ...state, isLoading: false, error: payload };
    },

    [deleteContact.pending]: state => {
      return { ...state, isLoading: true };
    },
    [deleteContact.fulfilled]: (state, { payload: { id } }) => {
      return {
        items: state.items.filter(user => user.id !== id),
        isLoading: false,
        error: null,
      };
    },
    [deleteContact.rejected]: (state, { payload }) => {
      return { ...state, isLoading: false, error: payload };
    },
  },
});

export const contactsReducer = usersSlice.reducer;
