import styled from 'styled-components';

export const ListingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 150px;
  padding-bottom: 40px;

  @media (max-width: 780px) {
    padding: 0 20px 20px 20px;
  }
`;

export const ListingsNumber = styled.h2`
  margin: 0;
  padding-top: 45px;
  padding-bottom: 30px;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 780px) {
    padding-top: 30px;
    padding-bottom: 20px;
  }
`;

export const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 35px;

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 16px;
  }
`;
