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
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 480px;
  height: 500px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: white;
  padding: 20px 10px;
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 20px;
`;

export const CloseButtonImage = styled.img`
  width: 22px;
  padding-right: 10px;
  cursor: pointer;
`;

export const ListingTitle = styled.p`
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  margin: 0;
`;

export const ImageContainer = styled.div`
  background-image: url(${(p) => p.src});
  background-size: cover;
  height: 170px;
`;

export const AvailableButton = styled.button`
  position: relative;
  width: 140px;
  height: 30px;
  background-color: gainsboro;
  border: none;
  border-radius: 25px;
  font-family: 'Nunito', sans-serif;
  font-size: 13px;
  font-weight: 600;
  top: 10px;
  left: 10px;
`;

export const Address = styled.p`
  text-align: center;
  font-size: 13px;
  font-weight: 800;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ListingDetailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  width: 60%;
  height: 20px;
`;

export const ListingDetailContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ListingDetailNumber = styled.p`
  display: flex;
  align-items: flex-end;
  font-size: 18px;
  font-weight: 600;
  padding-right: 5px;
`;

export const ListingDetailText = styled.p`
  display: flex;
  align-items: flex-end;
  color: gray;
  margin: 0;
  height: 22px;
  font-size: 13px;
`;

export const ListingDescriptionContainer = styled.div`
  padding: 0 25px;
`;

export const HR = styled.hr`
  width: 100%;
  margin: 0;
`;

export const ListingDescriptionText = styled.p`
  color: gray;
  font-size: 13px;
  text-align: center;
  margin: 0;
`;

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
  margin-bottom: 14px;
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
