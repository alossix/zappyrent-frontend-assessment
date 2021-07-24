import styled from 'styled-components';

export const CanoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CanoneTitle = styled.p`
  color: #05a8a4;
  font-size: 16px;
  font-weight: bold;
  padding-right: 8px;
  margin: 0;
  margin-bottom: 16px;
`;

export const CanonePriceContainer = styled.div`
  display: flex;
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
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
