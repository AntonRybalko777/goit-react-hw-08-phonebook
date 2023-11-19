import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>
        Welcome, <b style={{ color: '#F9FDE5' }}>{user.name}</b>
      </span>
      <IconButton color="error" onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </IconButton>
    </div>
  );
};
