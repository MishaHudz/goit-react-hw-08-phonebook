import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import LogInPage from 'pages/LogInPage/LogInPage';
import ContactPage from 'pages/ContactPage/ContactPage';
import HomePage from 'pages/HomePage/HomePage';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}
