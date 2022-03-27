import React from 'react';
import styled from 'styled-components';
import { SearchBar } from '../../core';
import { h1 } from '../../core/constants';

const ViewportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; ;
`;

const ContentContainer = styled.div`
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

export const Home = () => {
  return (
    <ViewportContainer>
      <ContentContainer>
        <HeadingContainer>
          We’ll show you the top accounts your favorite Twitter users engage
          with
        </HeadingContainer>
        <SearchBar />
      </ContentContainer>
    </ViewportContainer>
  );
};
