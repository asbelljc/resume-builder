import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: ${({ theme }) => theme.colors.primary};
  height: 100px;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
  width: 8.5in;
  font-family: 'Caveat', cursive;
  font-size: 84px;
  font-weight: 700;
  text-align: center;
  color: white;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>Resume Builder</Title>
    </HeaderWrapper>
  );
}

export default Header;
