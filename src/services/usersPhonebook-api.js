import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function registrationUserApi(registrationDate) {
  const { data } = await axios.post('/users/signup', registrationDate);
  return data;
}

export async function LogInUserApi(logInDate) {
  const { data } = await axios.post('/users/login', logInDate);
  return data;
}
