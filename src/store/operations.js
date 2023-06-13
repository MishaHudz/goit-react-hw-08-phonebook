import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LogInUserApi, registrationUserApi } from 'services/usersPhonebook-api';

// axios.defaults.baseURL = 'https://64871fbdbeba629727900216.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios();
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post('/', contact);

    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(`/${id}`);

    return data;
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
      return rejectWithValue(error.message);
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
      return rejectWithValue(error.message);
    }
  }
);
