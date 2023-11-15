import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};
