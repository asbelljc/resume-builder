import React, { Component } from 'react';
import styled from 'styled-components';

const TextAreaWrapper = styled.textarea``;

class TextArea extends Component {
  render() {
    const { onChange, placeholder, name, value } = this.props;

    return (
      <TextAreaWrapper
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    );
  }
}

export default TextArea;
