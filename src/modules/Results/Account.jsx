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
  height:120px;
`;

export const ProfileText = styled.div`
  display: inline-block;
  vertical-align: top;
  margin: 10px;
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
`;

export const Account = ({ accountData }) => {
    return (
        <AccountContainer>
            <ProfileImage src={accountData.photo} />
            <ProfileText>
                <ProfileHeader>
                    <Name>{accountData.name}</Name>
                    <Handle>@{accountData.handle}</Handle>
                </ProfileHeader>
                <ViewProfile>view profile</ViewProfile>
                <Bio>{accountData.bio}</Bio>
            </ProfileText>
        </AccountContainer>
    );
};
