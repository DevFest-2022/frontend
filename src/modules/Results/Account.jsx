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
`;

export const ProfileText = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 50%;
`;

export const ProfileHeader = styled.div`
  vertical-align: top;
`;

export const Name = styled.h3`
  margin: 5px 0px;
`;

export const Handle = styled.div`
  color: ${colors.handle};
`;

export const Bio = styled.div`
  vertical-align: bottom;
`;

export const ViewProfile = styled.p`
  display: inline-block;
  border: solid black 1px;
  border-radius: 20px;
  padding: 10px;
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
        {/* <ViewProfile>
                    view profile
                </ViewProfile> */}
        <Bio>{accountData.bio}</Bio>
      </ProfileText>
    </AccountContainer>
  );
};
