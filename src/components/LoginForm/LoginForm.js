import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch(
          logIn({
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
          })
        );
        e.target.reset();
      }}
    >
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
