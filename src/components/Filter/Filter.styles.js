import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
  }
`;

export const FilterInput = styled.input`
  border: 2px solid #fd9222;
  padding: 5px 10px;
  border-radius: 25px;
  outline: 0;
  background-color: #fcf1e0;
  color: #fd9222;
`;
