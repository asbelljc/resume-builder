import React, { Component } from 'react';
import styled from 'styled-components';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';
import Button from '../Auxiliary/Button';

const FormWrapper = styled.div``;

const ButtonsWrapper = styled.div``;

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      resumeData,
      onChangePersonal,
      onChangeExperience,
      onAddExperience,
      onDeleteExperience,
      onChangeEducation,
      onAddEducation,
      onDeleteEducation,
      onLoadSample,
      makePdfButton,
      onReset,
    } = this.props;

    return (
      <FormWrapper>
        <Personal
          personalData={resumeData.personal}
          onChange={onChangePersonal}
        />
        <Experience
          experienceData={resumeData.experience}
          onChange={onChangeExperience}
          onAdd={onAddExperience}
          onDelete={onDeleteExperience}
        />
        <Education
          educationData={resumeData.education}
          onChange={onChangeEducation}
          onAdd={onAddEducation}
          onDelete={onDeleteEducation}
        />
        <ButtonsWrapper>
          <Button onClick={onLoadSample}>Load Sample</Button>
          {makePdfButton}
          <Button resetBtn onClick={onReset}>
            Reset
          </Button>
        </ButtonsWrapper>
      </FormWrapper>
    );
  }
}

export default Form;
