import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);

  @media (max-width: 780px) {
    align-items: flex-start;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 480px;
  height: 510px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: white;

  @media (max-width: 780px) {
    height: 540px;
    margin: 32px 16px 0 16px;
  }
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 12px 12px 0 0;
`;

export const CloseButtonImage = styled.img`
  width: 22px;
  cursor: pointer;
`;

export const ListingTitle = styled.h2`
  font-size: 16px;
  font-weight: 800;
  text-align: center;
  margin: 0 15px 15px 15px;

  @media (max-width: 780px) {
    padding: 0 10px;
  }
`;

export const ImageContainer = styled.div`
  background-image: url(${(p) => p.src});
  background-size: cover;
  height: 150px;
  margin: 0 10px;

  @media (max-width: 780px) {
    height: 160px;
    margin: 0;
  }
`;

export const AvailableButton = styled.button`
  position: relative;
  width: 140px;
  height: 30px;
  background-color: lightgray;
  border: none;
  border-radius: 25px;
  font-size: 13px;
  font-weight: 600;
  top: 10px;
  left: 10px;
`;
