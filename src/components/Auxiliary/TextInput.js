import React from 'react';
import styled from 'styled-components';

const TextInputWrapper = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  padding: 0.125in 0 0.0625in;
  font-family: 'Karma', serif;
  font-size: 16px;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

function TextInput({ onChange, placeholder, name, value }) {
  return (
    <TextInputWrapper
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      value={value}
    />
  );
}

export default TextInput;
