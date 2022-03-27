import React, { useState, useEffect } from 'react';
import { Loading } from './Loading';
import { Account } from './Account';
import { SearchBarResults } from '../../core';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import { h1, h4 } from '../../core/constants';

const ComponentContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultContainer = styled.div`
  background: #fff;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  border: solid black 2px;
`;

const HeadersContainer = styled.div`
  padding: 1.5rem 1rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-bottom: 30px;
`;

const ResultHeader = styled.div`
  ${h1}
  font-weight: 900;
  margin-bottom: 10px;
`;

const ResultSubheader = styled.div`
  ${h4}
  text-align:center;
`;

const AccountsContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: solid black 2px;
  width: 100%;
`;

export const Results = () => {
  const [searchParams] = useSearchParams();
  const [searchedUserStr] = useState(searchParams.get('q'));
  const [accountData, setAccountData] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/' + searchedUserStr)
      .then((response) => {
        setAccountData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchParams, searchedUserStr]);

  const makeAccounts = () => {
    return accountData.map((account) => {
      return (
        <Account key={account.handle} accountData={account}>
          {account.handle}
        </Account>
      );
    });
  };
  return (
    <div>
      <ComponentContainer>
        <SearchBarResults></SearchBarResults>
        <ResultContainer>
          <HeadersContainer>
            <ResultHeader>{`@${searchedUserStr}'s top five`}</ResultHeader>
            <ResultSubheader>
              @{searchedUserStr} likes tweets from these five accounts the most.
              Follow them to make your feed look like @{searchedUserStr}&apos;s
            </ResultSubheader>
          </HeadersContainer>
          {accountData.length > 0 ? (
            <AccountsContainer>{makeAccounts()}</AccountsContainer>
          ) : (
            <Loading />
          )}
        </ResultContainer>
      </ComponentContainer>
    </div>
  );
};
