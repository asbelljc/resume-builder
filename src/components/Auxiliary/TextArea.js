import React, { Component } from 'react';
import styled from 'styled-components';

const TextAreaWrapper = styled.textarea`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  padding: 0.125in;
  padding-left: 0;
  resize: none;
  font-family: 'Karma', serif;
  font-size: 16px;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

class TextArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onChange, placeholder, name, value } = this.props;

    return (
      <TextAreaWrapper
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        value={value}
        rows="5"
      />
    );
  }
}

export default TextArea;
