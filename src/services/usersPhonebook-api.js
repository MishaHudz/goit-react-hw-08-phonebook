import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

function setHeadersToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function unSetHeadersToken() {
  axios.defaults.headers.common.Authorization = ``;
}

export async function registrationUserApi(registrationDate) {
  const { data } = await axios.post('/users/signup', registrationDate);
  setHeadersToken(data.token);
  return data;
}

export async function LogInUserApi(logInDate) {
  const { data } = await axios.post('/users/login', logInDate);
  setHeadersToken(data.token);
  return data;
}

export async function LogOutUserApi() {
  const { data } = await axios.post('/users/logout');
  unSetHeadersToken();
  return data;
}

export async function GetAllUserContactsApi() {
  const { data } = await axios('/contacts');
  return data;
}

export async function AddUserContactApi(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function DeleteUserContactApi(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

export async function getReconnectedCurrentUserApi(savedToken) {
  setHeadersToken(savedToken);
  const { data } = await axios('/users/current');
  return data;
}
