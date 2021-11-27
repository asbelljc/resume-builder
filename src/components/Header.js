import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  background: #999;
  margin: 0 auto;
  height: 100px;
`;

const Title = styled.h1`
  margin: 0 0 0 48px;
  padding: 0;
  font-family: 'DM Serif Display', serif;
  font-size: 48px;
  font-weight: 400;
  color: white;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Resume Builder.</Title>
      </Wrapper>
    );
  }
}

export default Header;
