import styled from 'styled-components';

export const ModalContainer = styled.div`
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

export const ListingDescriptionText = styled.p`
  color: gray;
  font-size: 13px;
  text-align: center;
  margin: 0;
`;

export const Address = styled.p`
  text-align: center;
  font-size: 13px;
  font-weight: 800;
`;
