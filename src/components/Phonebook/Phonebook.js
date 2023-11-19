import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectItems } from 'redux/selectors';
import { Container } from './Phonebook.styled';

export const Phonebook = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const items = useSelector(selectItems);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
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
        <b>Whoops! Something went wrong. Please try to reload the page.</b>
      )}
      {items.length > 0 ? <Filter /> : <span>Contact list is empty</span>}
      <ContactList />
    </Container>
  );
};
