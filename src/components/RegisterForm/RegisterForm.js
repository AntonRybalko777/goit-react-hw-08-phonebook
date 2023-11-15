import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

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
        <Form>
          <label>
            Name
            <Field name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Email
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Password
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};
