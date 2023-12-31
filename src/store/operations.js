import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  AddUserContactApi,
  DeleteUserContactApi,
  GetAllUserContactsApi,
  LogInUserApi,
  LogOutUserApi,
  getReconnectedCurrentUserApi,
  patchCurrentUserInfoApi,
  registrationUserApi,
} from 'services/usersPhonebook-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetAllUserContactsApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await AddUserContactApi(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await DeleteUserContactApi(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (newInfo, { rejectWithValue }) => {
    try {
      const data = await patchCurrentUserInfoApi(newInfo.id, {
        name: newInfo.name,
        number: newInfo.number,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///////////////////////

export const registrateUser = createAsyncThunk(
  'auth/registrateUser',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await registrationUserApi(userData);

      return data;
    } catch (error) {
      return rejectWithValue({ registration: error.message });
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/logInUser',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await LogInUserApi(userData);

      return data;
    } catch (error) {
      return rejectWithValue({ login: error.message });
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, { rejectWithValue }) => {
    try {
      const data = await LogOutUserApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const reconnectCurrentUser = createAsyncThunk(
  'auth/reconnectCurrenUser',
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.token;

    if (!token) {
      return rejectWithValue('');
    }

    try {
      const data = await getReconnectedCurrentUserApi(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
