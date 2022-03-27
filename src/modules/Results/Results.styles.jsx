import styled from 'styled-components';
import { h1, h4 } from '../../core/constants';

export const ComponentContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResultContainer = styled.div`
  background: #fff;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  border: solid black 2px;
`;

export const HeadersContainer = styled.div`
  padding: 1.5rem 1rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-bottom: 30px;
`;

export const ResultHeader = styled.div`
  ${h1}
  font-weight: 900;
  margin-bottom: 10px;
`;

export const ResultSubheader = styled.div`
  ${h4}
  text-align:center;
`;

export const AccountsContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: solid black 2px;
  width: 100%;
`;
