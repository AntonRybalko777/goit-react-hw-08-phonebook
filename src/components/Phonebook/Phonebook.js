import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectItems } from 'redux/selectors';
import {
  Container,
  StyledHeader,
  StyledHeader2,
  Error,
  Span,
} from './Phonebook.styled';

export const Phonebook = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const items = useSelector(selectItems);
  return (
    <Container>
      <StyledHeader>Phonebook</StyledHeader>
      <ContactForm />
      <StyledHeader2>Contacts</StyledHeader2>
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="56"
          visible={true}
        />
      )}
      {error && (
        <Error>
          Whops! Something went wrong. Please try to reload the page.
        </Error>
      )}
      {items.length > 0 ? <Filter /> : <Span>Contact list is empty</Span>}
      <ContactList />
    </Container>
  );
};
