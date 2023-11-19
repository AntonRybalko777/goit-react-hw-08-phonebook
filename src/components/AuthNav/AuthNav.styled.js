import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  border: 2px solid white;
  border-radius: 5px;
  padding: 2px 10px;
  transition: 200ms ease-in;

  &:nth-child(1) {
    background-color: #f67878;
    border-color: #f67878;

    &:hover {
      background-color: white;
      border-color: white;
      color: #f67878;
    }
  }

  &:hover {
    background-color: white;
    border-color: white;
    color: #1976d2;
  }
`;
