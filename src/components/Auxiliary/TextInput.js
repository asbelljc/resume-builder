import React, { Component } from 'react';
import styled from 'styled-components';

const TextInputWrapper = styled.input``;

class TextInput extends Component {
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
