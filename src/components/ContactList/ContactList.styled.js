import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  transition: 400ms ease-in;
`;

export const Li = styled.li`
  font-weight: 500;
  padding: 5px;
  position: relative;
  transition: 200ms ease-in;

  &:nth-child(1n + 2) {
    border-top: 1px solid #e8e8e8;
  }

  &:hover,
  :focus {
    background-color: #ececec;

    svg {
      color: #fba2a2;
    }
  }
`;

export const Button = styled.button`
  margin-left: 10px;
  border: 0;
  max-width: 50px;
  border-radius: 5px;
  background: transparent;
  padding: 0;
  cursor: pointer;
  transition: 200ms ease-in;
  position: absolute;
  right: 10px;

  &:hover {
    svg {
      color: red;
      transform: scale(1.2);
    }
  }

  svg {
    color: transparent;
    transition: 200ms ease-in;

    @media (max-width: 768px) {
      color: #fba2a2;
    }
  }
`;

export const StyledPhone = styled.span`
  position: absolute;
  right: 35px;
  color: #696969;
  font-size: 14px;
`;
export const StyledName = styled.span`
  margin-left: 20px;
`;
