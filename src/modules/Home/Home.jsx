import React from 'react';
import styled from 'styled-components';
import { SearchBar } from '../../core';
import { h1, h2 } from '../../core/constants';
import { Profile } from './Profile';
import { data } from '../../fakedata';
import { tweets } from '../../faketweets';
import { Tweet } from './Tweet';
import { profiles } from '../../profiles';

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ViewportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; ;
`;

const SearchContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 80%;
  border: 2px solid #000;
`;

const HeadingContainer = styled.div`
  ${h1}
  width: 75%;
  font-weight: 900;
  text-align: center;
  margin-bottom: 66px;
`;

const SubheadingContainer = styled.div`
  ${h2}
  width: 75%;
  text-align: center;
  margin-bottom: 20px;
`;

const FollowNextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 22%;
  height: 60px;
  border: 2px solid #000;
  margin-bottom: 30px;
  ${h2}
  font-weight: 700;
  background: #fff;
`;

const ProfilesContainer = styled.div`
  display: flex;
  align-items: center;
  vertical-align: top;
`;

const TopLeft = styled.div`
  margin-top: 150px;
  margin-left: 20px;
  margin-right: auto;
`;

const TopRight = styled.div`
  margin-left: auto;
  margin-right: 20px;
  margin-bottom: 10px;
`;

const BottomLeft = styled.div`
  margin-left: 20px;
  margin-right: auto;
`;

const BottomRight = styled.div`
  margin-left: auto;
  margin-right: 20px;
`;

export const Home = () => {
  return (
    <HomeContainer>
      <ViewportContainer>
        <FollowNextContainer>Follow Next</FollowNextContainer>
        <SearchContainer>
          <HeadingContainer>
            We’ll show you the top accounts your favorite Twitter users engage
            with
          </HeadingContainer>
          <SearchBar />
        </SearchContainer>
      </ViewportContainer>
      <ViewportContainer>
        <TopLeft>
          <Tweet data={tweets[0]}></Tweet>
        </TopLeft>
        <TopRight>
          <Tweet data={tweets[1]}></Tweet>
        </TopRight>
        <HeadingContainer>
          You can learn a lot from Twitter - we'll help you find your next
          follow.
        </HeadingContainer>
        <BottomLeft>
          <Tweet data={tweets[2]}></Tweet>
        </BottomLeft>
        <BottomRight>
          <Tweet data={tweets[3]}></Tweet>
        </BottomRight>
      </ViewportContainer>
      <ViewportContainer>
        <HeadingContainer>See how it works</HeadingContainer>
        <SubheadingContainer>
          Click on any of the accounts below. We'll show you the top five
          accounts they engage with the most.
        </SubheadingContainer>
        <ProfilesContainer>
          <Profile data={profiles[0]}></Profile>
          <Profile data={profiles[1]}></Profile>
          <Profile data={profiles[2]}></Profile>
        </ProfilesContainer>
      </ViewportContainer>
    </HomeContainer>
  );
};
