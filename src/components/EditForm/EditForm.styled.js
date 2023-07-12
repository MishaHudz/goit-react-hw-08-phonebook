import styled from 'styled-components';

export const EditComponentForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const EditComponentLabel = styled.label`
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 10px;

  align-items: stretch;
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const FormLeftPart = styled.div`
  margin-bottom: 10px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    gap: 10px;
  }
`;

export const EditFormInput = styled.input`
  border: 1px solid #fd9222;
  border-radius: 25px;
  padding: 5px 15px;
  background-color: transparent;
  color: white;
`;

export const EditFormButtonsList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
`;
