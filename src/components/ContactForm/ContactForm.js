import { Formik } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { TextField } from 'formik-mui';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import { StyledField, StyledForm } from './ContactForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Min length is 2')
    .max(20, 'Max length is 20')
    .required('This field is required'),
  number: Yup.string()
    .required('This field is required')
    .matches(/^[0-9.-]*$/, 'Allowed only digits, dash and dots')
    .min(5, 'Min length is 5')
    .max(15, 'Max length is 15'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          if (items.find(contact => contact.name === values.name.trim())) {
            Notiflix.Notify.failure(`${values.name} already in contacts`);
          } else {
            dispatch(
              addContact({
                name: values.name.trim(),
                number: values.number.trim(),
              })
            );
            actions.resetForm();
          }
        }}
      >
        <StyledForm>
          <StyledField
            name="name"
            component={TextField}
            label="Name"
            variant="standard"
          />
          <StyledField
            type="tel"
            name="number"
            component={TextField}
            label="Number"
            variant="standard"
          />
          <Button type="submit" variant="contained" endIcon={<AddIcon />}>
            Add contact
          </Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
