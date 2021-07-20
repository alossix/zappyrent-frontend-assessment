import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 500px;
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

export const ListingDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 75%;
`;

export const ListingType = styled.p`
  color: gray;
`;

export const ListingTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const ListingDetailContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ListingDetailNumber = styled.p`
  font-size: 22px;
  font-weight: 400;
  padding-right: 5px;
  margin: -1px 0;
`;

export const ListingDetailText = styled.p`
  color: gray;
  margin: 0;
`;

export const ListingDescriptionContainer = styled.div`
  width: 100%;
  height: 70px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ListingDescription = styled.p`
  color: gray;
`;

export const HR = styled.hr`
  width: 99%;
  border: 2px solid lightgray;
  border-top: none;
`;

export const CanoneTitle = styled.h2`
  color: #05a8a4;
  font-size: 24px;
  font-weight: bold;
`;
