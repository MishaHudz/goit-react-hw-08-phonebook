import styled from 'styled-components';

export const ContactItemLi = styled.li`
  width: 100%;
  padding: 10px 15px;
  border-radius: 25px;
  border: 2px solid #fd9222;
  color: white;
  background-color: #1e1823;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  opacity: 0;
  transform: scale(0);
  animation: scale-in 0.8s ease-in-out forwards;

  @keyframes scale-in {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ContactContainer = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const NumberInfo = styled.p`
  font-weight: 700;
  width: 100%;
  display: flex;
  gap: 5px;
`;

export const DinamickNameInfoContainer = styled.span`
  width: 200px;

  overflow: hidden;
  position: relative;
`;

export const DinamickNameInfo = styled.span`
  position: absolute;
  white-space: nowrap;
  font-weight: 400;

  &:hover {
    animation: moveText 5s linear infinite;
  }

  @keyframes moveText {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export const NumberContainer = styled.span`
  font-weight: 400;
`;

export const ContactButton = styled.button`
  border: 0;
  background-color: #fd9222;
  color: white;
  cursor: pointer;
  margin: 0;

  border-radius: 25px;
  padding: 5px 10px;

  &:hover {
    background-color: #fcf1e0;
    color: #fd9222;
  }
`;

export const ButtonList = styled.ul`
  gap: 10px;
  display: flex;
`;
