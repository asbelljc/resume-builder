import React, { Component } from 'react';
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

class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onChange, placeholder, name, value } = this.props;

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
}

export default TextInput;
