import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 500px;
  border-radius: 20px;
  background-color: lightcoral;
  margin: 50px 0;
`;

export const ImageContainer = styled.div`
  background-image: url(${(p) => p.src});
  background-size: contain;
  height: 40%;
  width: 100%;
`;

export const ListingType = styled.p`
  color: gray;
`;

export const ListingTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const ListingDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: white;
  width: 100%;
`;

export const ListingDetailContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 5px;
  background-color: gray;
`;

export const ListingDetailNumber = styled.p`
  font-size: 24px;
  font-weight: bold;
  padding-right: 5px;
  background-color: lightgreen;
`;

export const ListingDetailText = styled.p`
  color: gray;
  background-color: lightsalmon;
`;
