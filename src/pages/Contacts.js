import { Phonebook } from 'components/Phonebook/Phonebook';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>My Phonebook</title>
      </Helmet>
      <Phonebook />
    </div>
  );
}
