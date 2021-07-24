import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  border-bottom: 1px solid lightgray;
`;

export const ListingDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 28px;
  margin: auto;

  @media (max-width: 780px) {
    margin-top: 10px;
  }
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
  color: gray;
  margin: 0;
  height: 22px;
  font-size: 13px;

  &:not(:last-child) {
    padding-right: 45px;
  }
`;

export const Address = styled.p`
  text-align: center;
  font-size: 13px;
  font-weight: 800;
  padding: 8px 0;

  @media (max-width: 780px) {
    padding: 0;
  }
`;

export const DescriptionText = styled.p`
  color: gray;
  font-size: 13px;
  text-align: center;
  padding: 0 25px;
  margin: 0;
`;
