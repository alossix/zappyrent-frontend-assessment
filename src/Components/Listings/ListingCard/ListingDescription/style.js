import styled from 'styled-components';

export const ListingDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35%;
  padding: 15px;
  border-bottom: 1px solid lightgray;
`;

export const ListingType = styled.p`
  color: gray;
  margin: 0;
  font-size: 13px;
`;

export const ListingTitle = styled.p`
  font-size: 18px;
  font-weight: 800;
  margin: 0;
`;

export const ListingDetailContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
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
  height: 22px;
  margin: 0;
  padding-right: 35px;
  color: gray;
`;

export const ListingDescriptionContainer = styled.div`
  width: 100%;
  height: 40px;
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
