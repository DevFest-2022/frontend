import React from 'react';
import { ResultContainer, Handle, Name, AccountContainer } from './Results.styles';
import { data } from '../../fakedata.js';
import { Account } from './Account';

export const Results = () => {
  let accounts=[];
  data.accounts.forEach((account)=>{
    accounts.push(<Account key={account.handle} accountData={account}>{account.handle}</Account>)
  })
  return ( 
    <ResultContainer>
      <Handle>@{data.searched_user.handle}</Handle>
      <Name>{data.searched_user.name}</Name>
      <h2>Most Interacted with Accounts:</h2>
      <AccountContainer>{accounts}</AccountContainer>
    </ResultContainer>
  );
};
