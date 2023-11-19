import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { TextField } from 'formik-mui';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledField,
} from 'components/RegisterForm/RegisterForm.styled';
import { Button } from '@mui/material';

const loginSchema = Yup.object().shape({
  email: Yup.string().required('This field is required'),
  password: Yup.string().required('This field is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          dispatch(
            logIn({
              email: values.email,
              password: values.password,
            })
          );
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledField
            name="email"
            type="email"
            component={TextField}
            label="Email"
            variant="outlined"
          />
          <StyledField
            name="password"
            type="password"
            component={TextField}
            label="Password"
            variant="outlined"
          />
          <Button type="submit" variant="outlined">
            Log in
          </Button>{' '}
        </StyledForm>
      </Formik>
    </div>
  );
};
