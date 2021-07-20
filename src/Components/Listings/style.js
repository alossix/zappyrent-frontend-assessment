import styled from 'styled-components';

export const ListingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 150px;
`;

export const ListingsNumber = styled.h2`
  margin: 0;
  padding-top: 65px;
  padding-bottom: 40px;
`;

export const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;
