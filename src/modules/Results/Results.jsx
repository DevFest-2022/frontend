import React, { useState, useEffect } from 'react';
import {
  ResultContainer,
  ResultHeader,
  ResultSubheader,
  AccountsContainer,
  ComponentContainer,
  HeadersContainer,
} from './Results.styles';
import { Loading } from './Loading';
import { Account } from './Account';
import { SearchBarResults } from '../../core';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export const Results = () => {
  const [searchParams] = useSearchParams();
  const [searchedUserStr] = useState(searchParams.get('q'));
  const [accountData, setAccountData] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/' + searchedUserStr)
      .then((response) => {
        console.log(response.data.results);
        setAccountData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log('q search param: ' + searchParams.get('q'));
  }, [searchParams, searchedUserStr]);

  const makeAccounts = () => {
    console.log('running!');
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
