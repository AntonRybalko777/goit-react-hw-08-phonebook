import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { FcBusinessContact } from 'react-icons/fc';

const Header = styled.h1`
  margin-top: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default function Home() {
  return (
    <Container>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Header>Welcome to Phonebook!</Header>
      <FcBusinessContact size="100px" />
    </Container>
  );
}
