import styled from 'styled-components';

export const HomePageSection = styled.section`
  min-height: 100vh;
  width: 320px;
  display: flex;
  flex-direction: column;

  padding: 20px;
  margin: 0 auto;

  gap: 20px;

  @media (min-width: 768px) {
    padding-top: 40px;
    width: 768px;
    flex-direction: row;
  }
`;

export const HomePageImageContainer = styled.div`
  display: none;
  padding-top: 50px;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const HomePageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

export const HomePageContactsBtn = styled.button`
  width: 120px;
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

export const HomePageInfo = styled.p`
  line-height: 1.5em;
`;
