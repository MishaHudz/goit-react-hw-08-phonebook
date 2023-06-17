import styled from 'styled-components';

export const AuthorizedUresContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`;

export const UresPhoto = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    & {
      display: block;
      border-radius: 50%;
    }
  }
`;

export const LogOutBtn = styled.button`
  background-color: #fd9222;
  border-radius: 25px;
  border: none;

  padding: 5px 10px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #fd9222;
  }
`;
