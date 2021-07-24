import styled from 'styled-components';

export const CanoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  border-top: 1px solid lightgray;
`;

export const CanonePriceContainer = styled.div`
  display: flex;
`;

export const CanoneTitle = styled.p`
  color: #05a8a4;
  font-size: 16px;
  font-weight: bold;
  padding-right: 8px;
  margin: 0;
`;

export const CanonePrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

export const CanoneMese = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: gray;
  margin: 0;
`;

export const ReserveButton = styled.button`
  width: 300px;
  height: 40px;
  background-color: #05a8a4;
  border: none;
  border-radius: 25px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
