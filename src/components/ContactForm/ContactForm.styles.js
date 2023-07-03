import styled from 'styled-components';

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #1e1823;
  color: white;
  gap: 20px;

  padding: 20px;
  border-radius: 30px;
  margin-top: 15px;
  margin-bottom: 25px;

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
  @media (min-width: 768px) {
    padding: 30px;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  justify-content: flex-end;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const ErrorMessage = styled.p`
  color: #fd9222;
`;

export const ContactButton = styled.button`
  width: 120px;
  padding: 5px 10px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 25px;
  color: white;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #fd9222;
    border-color: #fd9222;
  }
`;

export const Input = styled.input`
  border: 1px solid #fd9222;
  border-radius: 25px;
  padding: 5px 15px;
  background-color: transparent;
  color: white;
  @media (min-width: 768px) {
    margin-left: 10px;
  }
`;
