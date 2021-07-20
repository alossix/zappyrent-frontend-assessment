import styled from 'styled-components';

export const ListingDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45%;
  padding: 20px 10px;
  border-bottom: 1px solid lightgray;
`;

export const ListingType = styled.p`
  color: gray;
  margin: 0;
`;

export const ListingTitle = styled.p`
  font-size: 24px;
  font-weight: 800;
  margin: 0;
`;

export const ListingDetailContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
`;

export const ListingDetailNumber = styled.p`
  font-size: 22px;
  font-weight: 400;
  padding-right: 5px;
  margin: -2px 0;
`;

export const ListingDetailText = styled.p`
  color: gray;
  margin: 0;
  padding-right: 45px;
  height: 22px;
`;

export const ListingDescriptionContainer = styled.div`
  width: 100%;
  height: 65px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ListingDescriptionText = styled.p`
  color: gray;
  margin: 0;
`;
