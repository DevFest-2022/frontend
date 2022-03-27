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
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const TextInput = styled.input`
  ${h4}
  font-family: 'MonumentExtended';
  // font-size: 20px;
  text-align: center;
  height: 67px;
  width: 98.75%;
  margin-bottom: 34px;
  border: 2px solid #000;
`;
const Button = styled.button`
  height: 67px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  line-height: 67px;

  color: #fff;
  background: #000000;
  border: 2px solid #000;
  font-family: 'MonumentExtended';
  cursor: pointer;
`;
export const SearchBar = () => {
  const navigate = useNavigate();
  const textInputRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    if (textInputRef.current.value !== '') {
      navigate('/results?q=' + textInputRef.current.value);
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
