import { Formik } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from 'redux/selectors';
import { addContact } from 'redux/operations';

import {
  StyledField,
  Label,
  StyledForm,
  StyledErrorMessage,
  Button,
} from './ContactForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Min length is 2')
    .max(20, 'Max length is 20')
    .required('This field is required'),
  number: Yup.string()
    .required('This field is required')
    .matches(/^[0-9.-]*$/, 'Allowed only digits, dash and dots')
    .min(7, 'Min length is 7')
    .max(12, 'Max length is 12'),
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
                phone: values.number.trim(),
              })
            );
            actions.resetForm();
          }
        }}
      >
        <StyledForm>
          <Label>
            Name
            <StyledField name="name" />
            <StyledErrorMessage name="name" component="div" />
          </Label>

          <Label>
            Number
            <StyledField type="tel" name="number" />
            <StyledErrorMessage name="number" component="div" />
          </Label>

          <Button type="submit">
            <AiOutlinePlusCircle />
            Add contact
          </Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
