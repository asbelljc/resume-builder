import React, { Component } from 'react';
import styled from 'styled-components';
import Form from './Form/Form';
import Preview from './Preview/Preview';

const MainWrapper = styled.main`
  width: 8.5in;
  display: flex;
  gap: 0.25in;

  @media (max-width: 17.25in) {
    flex-direction: column;
  }
`;

class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <Form />
        <Preview />
      </MainWrapper>
    );
  }
}

export default Main;
