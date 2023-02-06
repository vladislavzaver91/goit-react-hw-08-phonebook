import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Layout } from 'components/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { NotFound } from 'pages/NotFound';
import { Container } from './App.styled';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Container>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />}
            />
          }
        />
        <Route path="/login" element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} 
            />
          }
        />

        <Route path="/contacts" element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} 
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </Container>
  );
};

// import { ToastContainer } from "react-toastify";
// import { ContactForm } from "../ContactForm";
// import { Filter } from "../Filter";
// import { ContactList } from '../ContactList';
// import { Container } from './App.styled';

// export const App = () => {
//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//       <ToastContainer />
//     </Container>
//   )
// }