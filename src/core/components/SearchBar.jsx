import styled from 'styled-components';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { h3 } from '../constants/Typography';

const StyledText = styled.div`
  ${h3}
`;
const Form = styled.form``;
const TextInput = styled.input``;
const Button = styled.div`
  ${h3}
  font-family: 'MonumentExtended';
`;
export const SearchBar = () => {
  const navigate = useNavigate();
  const textInputRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(textInputRef.current.value);
    navigate('/results?q=' + textInputRef.current.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextInput
        ref={textInputRef}
        type='text'
        placeholder='Enter a Twitter handle'
        onSubmit={onSubmit}
      ></TextInput>
      <Button type='submit' onClick={onSubmit}>
        <StyledText>Search</StyledText>
      </Button>
      <StyledText>test</StyledText>
    </Form>
  );
};
