import React from 'react';
import styled from 'styled-components';
import { colors } from '../../core/constants/Colors';

export const AccountContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  display: inline-block;
  height: 80px;
  margin-top: 15px;
`;

export const ProfileText = styled.div`
  display: inline-block;
  vertical-align: top;
  margin: 10px;
  width: 100%;
`;

export const ProfileHeader = styled.div`
  vertical-align: top;
  display: inline-block;
`;

export const Name = styled.h3`
  margin: 5px 0px;
`;

export const Handle = styled.div`
  color: ${colors.handle};
`;

export const Bio = styled.div`
  margin-top: 10px;
`;

export const ViewProfile = styled.div`
  display: inline-block;
  background-color: black;
  color: white;
  padding: 10px 30px;
  vertical-align: top;
  justify-content: flex-end;
  align-items: right;
  float: right;
  cursor: pointer;
`;

export const Account = ({ accountData }) => {
  return (
    <AccountContainer>
      <ProfileImage src={accountData.photo_url} />
      <ProfileText>
        <ProfileHeader>
          <Name>{accountData.name}</Name>
          <Handle>@{accountData.handle}</Handle>
        </ProfileHeader>
        <ViewProfile
          onClick={() =>
            window.open(
              'https://www.twitter.com/' + accountData.handle,
              '_blank'
            )
          }
        >
          view profile
        </ViewProfile>
        <Bio>{accountData.bio}</Bio>
      </ProfileText>
    </AccountContainer>
  );
};
