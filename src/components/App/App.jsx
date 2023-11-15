import { useSelector, useDispatch } from 'react-redux';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { ContactList } from '../ContactList/ContactList';
// import { Filter } from '../Filter/Filter';
// import { Container, Span, ErrorMsg } from './App.styled';
// import { RotatingLines } from 'react-loader-spinner';
import { useEffect, lazy } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const Home = lazy(() => import('../../pages/Home'));
const Contacts = lazy(() => import('../../pages/Contacts'));
const Login = lazy(() => import('../../pages/Login'));
const Register = lazy(() => import('../../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );

  // return (
  //   <Container>
  //     <h1>Phonebook</h1>
  //     <ContactForm />
  //     <h2>Contacts</h2>
  //     {isLoading && (
  //       <RotatingLines
  //         strokeColor="grey"
  //         strokeWidth="5"
  //         animationDuration="0.75"
  //         width="96"
  //         visible={true}
  //       />
  //     )}
  //     {error && (
  //       <ErrorMsg>
  //         Whoops! Something went wrong. Please try to reload the page.
  //       </ErrorMsg>
  //     )}
  //     {items.length > 0 ? <Filter /> : <Span>Contact list is empty</Span>}
  //     <ContactList />
  //   </Container>
  // );
};
