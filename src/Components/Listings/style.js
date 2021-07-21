import styled from 'styled-components';

export const ListingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 150px 100px 150px;
`;

export const ListingsNumber = styled.h2`
  margin: 0;
  padding-top: 45px;
  padding-bottom: 30px;
  font-size: 16px;
  font-weight: 600;
`;

export const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;
