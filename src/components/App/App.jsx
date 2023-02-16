import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { Layout } from 'components/Layout/Layout';
import { Contacts } from 'pages/ContactsPage';
import { MainPage } from 'pages/HomePage';
import { Login } from 'pages/LoginPage';
import { Registers } from 'pages/RegisterPage';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from './App.styled';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useSelector(state => state.auth);

  const [mode, setMode] = React.useState('light');

  const darkMode = useSelector(state => state.theme.darkMode);

  React.useMemo(() => {
    if (darkMode) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [darkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {!isRefreshing && (
          <Container>
          <Routes>
            <Route
              path="/"
              element={<Layout colorModeContext={ColorModeContext} />}
            >
              {!isLoggedIn && <Route index element={<MainPage />} />}
              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={Contacts} redirectTo="/login" />
                }
              />
              <Route
                index
                path="/register"
                element={
                  <RestrictedRoute
                    component={Registers}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute component={Login} redirectTo="/contacts" />
                }
              />
            </Route>
          </Routes>
          </Container>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};