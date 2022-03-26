import React from 'react';
import { ResultContainer, Username, NameHeader, AccountList, AccountItem } from './Results.styles'

export const Results = () => {
  return ( 
    <ResultContainer>
      <Username>@jack</Username>
      <NameHeader>Jack Dorsey</NameHeader>
      <AccountList>
        <AccountItem>@elonmusk</AccountItem>
        <AccountItem>@elonmusk</AccountItem>
        <AccountItem>@elonmusk</AccountItem>
        <AccountItem>@elonmusk</AccountItem>
        <AccountItem>@elonmusk</AccountItem>
      </AccountList>
    </ResultContainer>
  );
};
