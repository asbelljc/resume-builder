import React, { Component } from 'react';
import styled from 'styled-components';
import Form from './Form/Form';
import Preview from './Preview/Preview';
// import Personal from './Personal';
// import Education from './Education';
// import Experience from './Experience';

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
