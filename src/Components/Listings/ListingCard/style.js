import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: 550px;
  border-radius: 20px;
  margin: 50px 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const ImageContainer = styled.div`
  background-image: url(${(p) => p.src});
  background-size: contain;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 40%;
  width: 100%;
`;

export const CanoneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15%;
  padding: 0 10px;
`;

export const CanoneTitle = styled.p`
  color: #05a8a4;
  font-size: 24px;
  font-weight: bold;
`;

export const CanonePriceContainer = styled.div`
  display: flex;
`;

export const CanonePrice = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
export const CanoneMese = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: gray;
`;
