import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 410px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  background-image: url(${(p) => p.src});
  background-size: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 40%;
  width: 100%;
`;

export const AvailableButton = styled.button`
  position: relative;
  width: 140px;
  height: 30px;
  background-color: lightgray;
  border: none;
  border-radius: 25px;
  font-family: 'Nunito', sans-serif;
  font-size: 13px;
  font-weight: 600;
  top: 10px;
  left: 10px;
  cursor: pointer;
`;
