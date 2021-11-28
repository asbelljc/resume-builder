import React, { Component } from 'react';
import styled from 'styled-components';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';

const FormWrapper = styled.div``;

class Form extends Component {
  render() {
    return (
      <FormWrapper>
        <Personal />
        <Experience />
        <Education />
      </FormWrapper>
    );
  }
}

export default Form;
