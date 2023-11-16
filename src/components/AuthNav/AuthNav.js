import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
