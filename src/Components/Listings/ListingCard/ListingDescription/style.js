import styled from 'styled-components';

export const ListingDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40%;
  padding: 0 15px;
`;

export const ListingType = styled.p`
  height: 25px;
  color: gray;
  margin: 0;
  font-size: 13px;
`;

export const ListingTitle = styled.p`
  font-size: 16px;
  font-weight: 800;
  margin: 0;
  min-height: 45px;
`;

export const ListingDetailContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const DetailNumber = styled.p`
  display: flex;
  align-items: flex-end;
  font-size: 18px;
  font-weight: 600;
  padding-right: 5px;
`;

export const DetailText = styled.p`
  display: flex;
  align-items: flex-end;
  font-size: 13px;
  margin: 0;
  padding-right: 35px;
  color: gray;
  height: 20px;
`;

export const ListingDescriptionContainer = styled.div`
  width: 95%;
  height: 35px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ListingDescriptionText = styled.p`
  color: gray;
  margin: 0;
  font-size: 13px;
`;
