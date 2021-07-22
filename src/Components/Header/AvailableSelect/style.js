import styled from 'styled-components';

export const AvailableContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const AvailableLabel = styled.label`
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: darkgray;
  padding-right: 8px;
  margin-left: 50px;

  @media (max-width: 780px) {
    margin-left: 15px;
    font-size: 14px;
    font-weight: bold;
  }
`;
