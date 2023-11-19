import { StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </div>
  );
};
