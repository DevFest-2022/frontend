import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { h4 } from '../constants/Typography';

const StyledText = styled.div`
  ${h4}
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
`;

const TextInput = styled.input`
  ${h4}
  font-family: 'MonumentExtended';
  padding-left: 20px;
  height: 65px;
  width: 98.75%;
  border: 2px solid #000;
`;
const Button = styled.button`
  height: 71px;
  width: 50%;
  text-align: center;
  vertical-align: middle;
  line-height: 65px;
  margin-left: 2.5%;

  color: #fff;
  background: #000000;
  border: 2px solid #000;
  font-family: 'MonumentExtended';
  cursor: pointer;
`;
export const SearchBarResults = () => {
  const navigate = useNavigate();
  const textInputRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    if (textInputRef.current.value !== '') {
      navigate('/results?q=' + textInputRef.current.value);
      window.location.reload();
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextInput
        ref={textInputRef}
        type='text'
        placeholder='Enter any Twitter handle'
        onSubmit={onSubmit}
      ></TextInput>
      <Button type='submit' onClick={onSubmit}>
        <StyledText>Search</StyledText>
      </Button>
    </Form>
  );
};
