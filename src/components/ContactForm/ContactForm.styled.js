import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(4)};
`;

export const StyledField = styled(Field)`
  border: none;
  border-bottom: 1px solid grey;

  &:focus {
    outline: none;
  }
`;
