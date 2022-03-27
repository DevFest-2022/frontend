import React from 'react';
import styled from 'styled-components';
import { h4 } from '../../core/constants/Typography'
import { useNavigate } from 'react-router-dom';

export const TweetContainer = styled.div`
  background: #fff;
  border: solid black 2px;
  margin: 0px 20px;
  width: 500px;
  padding: 10px;
  cursor: pointer;
`;

export const Text = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 70%;
    padding: 10px;
`;

export const Handle = styled.div`
    ${h4}    
    margin-bottom: 5px;
`;

export const Image = styled.img`
    height: 50px;
    border-radius: 50%;
`;

export const Tweet = ({ data }) => {
    return (
        <TweetContainer onClick={() => window.location=data.url}>
            <Image src={data.photo}></Image>
            <Text>
                <Handle>@{data.handle}</Handle>
                {data.tweet}
            </Text>
        </TweetContainer>
    );
}


