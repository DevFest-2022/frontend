import React from 'react';
import styled from 'styled-components';
import { SearchBar } from '../../core';
import { h1, h2 } from '../../core/constants';

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
      <ViewportContainer></ViewportContainer>
    </HomeContainer>
  );
};
