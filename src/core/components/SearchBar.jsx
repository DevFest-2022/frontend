import styled from 'styled-components';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const Form = styled.form``;
const TextInput = styled.input``;
const Button = styled.button``;

export const SearchBar = () => {
  const navigate = useNavigate();
  const textInputRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(textInputRef.current.value);
    navigate('/search?q=' + textInputRef.current.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextInput
        ref={textInputRef}
        type='text'
        placeholder='placeholder'
        onSubmit={onSubmit}
      ></TextInput>
      <Button type='submit' onClick={onSubmit}>
        Search
      </Button>
    </Form>
  );
};
