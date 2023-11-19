import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { TextField } from 'formik-mui';
import { Button } from '@mui/material';
import { StyledForm, StyledField } from './RegisterForm.styled';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Min length is 2')
    .max(20, 'Max length is 20')
    .required('This field is required'),
  email: Yup.string()
    .required('This field is required')
    .min(7, 'Min length is 7'),
  password: Yup.string()
    .required('This field is required')
    .min(7, 'Min length is 7')
    .max(20, 'Max length is 12'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          dispatch(
            register({
              name: values.name,
              email: values.email,
              password: values.password,
            })
          );
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledField
            component={TextField}
            name="name"
            label="Name"
            variant="outlined"
          />
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
            Register
          </Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
