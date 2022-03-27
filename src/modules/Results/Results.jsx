import React, { useState, useEffect } from 'react';
import {
  ResultContainer,
  ResultHeader,
  ResultSubheader,
  AccountsContainer,
  ComponentContainer,
  HeadersContainer,
} from './Results.styles';
import { data } from '../../fakedata.js';
import { Account } from './Account';
import { SearchBarResults } from '../../core';
import { useSearchParams } from 'react-router-dom';

export const Results = () => {
  const [searchParams] = useSearchParams();
  const [searchedUserStr] = useState(searchParams.get('q'));

  useEffect(() => {
    console.log('q search param: ' + searchParams.get('q'));
  }, [searchParams]);

  let accounts = [];
  data.accounts.forEach((account) => {
    accounts.push(
      <Account key={account.handle} accountData={account}>
        {account.handle}
      </Account>
    );
  });
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
          <AccountsContainer>{accounts}</AccountsContainer>
        </ResultContainer>
      </ComponentContainer>
    </div>
  );
};
