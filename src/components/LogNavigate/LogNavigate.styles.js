import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogNavList = styled.ul`
  display: flex;
  gap: 10px;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 150px;
  }
`;

export const LogNavLink = styled(NavLink)`
  font-weight: 700;
  color: white;

  &.active {
    color: #fd9222;
  }
`;

export const LogMobileNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;

  &.active {
    background-color: #fd9222;
  }
`;
