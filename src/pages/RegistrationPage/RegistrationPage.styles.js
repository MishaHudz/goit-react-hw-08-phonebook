import styled from 'styled-components';

export const RegistrationSection = styled.section`
  min-height: 100vh;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 60px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #1e1823;
  color: white;
  gap: 25px;

  padding: 20px;
  border-radius: 30px;

  @media (min-width: 768px) {
    padding: 30px;
    gap: 20px;
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

export const RegistrationFormLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    justify-content: flex-end;
    flex-direction: row;
    gap: 15px;
  }
`;

export const RegistrationPageInput = styled.input`
  border: 1px solid #fd9222;
  border-radius: 25px;
  padding: 5px 15px;
  background-color: transparent;
  color: white;
`;
