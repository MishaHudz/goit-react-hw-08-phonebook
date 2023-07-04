import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 10px;
  padding-right: 10px;

  background-color: #1e1823;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Main = styled.main``;
