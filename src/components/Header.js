import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: #69c;
  height: 100px;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
  width: 8.5in;
  font-family: 'DM Serif Display', serif;
  font-size: 48px;
  font-weight: 400;
  text-align: center;
  color: white;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Resume Builder</Title>
      </Wrapper>
    );
  }
}

export default Header;
