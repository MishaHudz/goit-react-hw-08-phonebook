import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import LogInPage from 'pages/LogInPage/LogInPage';
import ContactPage from 'pages/ContactPage/ContactPage';
import HomePage from 'pages/HomePage/HomePage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { reconnectCurrentUser } from 'store/operations';
import PrivateRoute from 'components/routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reconnectCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute path="/contacts">
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute path="/contacts">
                <LogInPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute path="/contacts">
                <ContactPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
