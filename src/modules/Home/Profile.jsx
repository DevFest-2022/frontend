import React from 'react';
import styled from 'styled-components';
import { colors } from '../../core/constants/Colors'

export const ProfileContainer = styled.div`
  background: #fff;
  display: inline-block;
  border: solid black 2px;
  margin: 0px 20px;
  width: 400px;
  height: 300px;
  padding: 10px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  display: inline-block;
  height:80px;
  margin-top: 15px;
`;

export const ProfileHeader = styled.div`
  vertical-align: top;
  display: inline-block;
  margin: 20px 10px;
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

export const Search = styled.div`
    background-color: black;
    color: white;
    padding: 10px;
    width: 200px;
    margin-top: 20px;
    text-align: center;
    margin-left: 50%;
`;

export const Profile = ({data}) => {
    return (
        <ProfileContainer>
            <ProfileImage src={data.photo} />
                <ProfileHeader>
                    <Name>{data.name}</Name>
                    <Handle>@{data.handle}</Handle>
                </ProfileHeader>
            <Bio>{data.bio}</Bio>
            <Search>Search</Search>

        </ProfileContainer>    

    );
}