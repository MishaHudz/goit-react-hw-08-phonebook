import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogNavList = styled.ul`
  width: 150px;
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

export const LogNavLink = styled(NavLink)`
  font-weight: 700;
  color: #1e1823;

  &.active {
    color: #fd9222;
  }
`;
