import React from 'react';
import styled from 'styled-components';
import { colors } from '../../core/constants/Colors'
import { data } from 'browserslist';
import { useNavigate } from 'react-router-dom';

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
  height:80px;
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
    margin: 10px 0px;
`;

export const Search = styled.div`
    background-color: black;
    color: white;
    padding: 10px;
    width: 200px;
    margin: 50px auto auto auto;
    text-align: center;
    cursor: pointer;
`;

export const Profile = ({data}) => {
    const navigate = useNavigate();
    const onClick = (e) => {
        e.preventDefault();
        navigate('/results?q=' + data.handle);
      };
    return (
        <ProfileContainer>
            <ProfileImage src={data.photo} />
                <ProfileHeader>
                    <Name>{data.name}</Name>
                    <Handle>@{data.handle}</Handle>
                </ProfileHeader>
            <Bio>{data.bio}</Bio>
            <Search onClick={onClick}>Search</Search>
        </ProfileContainer>    

    );
}