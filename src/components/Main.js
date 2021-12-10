import React, { Component } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { useReactToPrint } from 'react-to-print';
import Form from './Form/Form';
import Preview from './Preview/Preview';
import emptyResume from './Auxiliary/emptyResume';
import sampleResume from './Auxiliary/sampleResume';

const MainWrapper = styled.main`
  width: 8.5in;
  display: flex;
  gap: 0.25in;

  @media (max-width: 17.25in) {
    flex-direction: column;
  }
`;

class Main extends Component {
  constructor(props) {
    super(props);
  }

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
