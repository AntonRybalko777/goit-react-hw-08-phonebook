import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Bar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar position="static">
      <Toolbar>
        <Navigation />
        <Typography sx={{ ml: 'auto' }}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
