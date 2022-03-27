import React from 'react';
import {
  ResultContainer,
  ResultHeader,
  ResultSubheader,
  AccountsContainer,
} from './Results.styles';
import { data } from '../../fakedata.js';
import { Account } from './Account';
import { SearchBarResults } from '../../core';

export const Results = () => {
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
      <SearchBarResults></SearchBarResults>
      <ResultContainer>
        <ResultHeader>
          @{data.searched_user.handle}&apos;s top five
        </ResultHeader>
        <ResultSubheader>
          @{data.searched_user.handle} likes tweets from these five accounts the
          most. Follow them to make your feed look like @
          {data.searched_user.handle}&apos;s
        </ResultSubheader>
        <AccountsContainer>{accounts}</AccountsContainer>
      </ResultContainer>
    </div>
  );
};
