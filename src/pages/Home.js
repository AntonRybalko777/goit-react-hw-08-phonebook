import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <h1>Welcome to Phonebook!</h1>
    </div>
  );
}
