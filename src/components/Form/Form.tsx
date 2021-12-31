import React from 'react';
import styled from 'styled-components';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';
import Button from '../Auxiliary/Button';
import { ResumeData } from '../../types/data';
import {
  ChangeHandler,
  AddHandler,
  DeleteHandler,
} from '../../types/formHandlers';

interface Props {
  resumeData: ResumeData;
  onChangePersonal: ChangeHandler;
  onChangeExperience: ChangeHandler;
  onAddExperience: AddHandler;
  onDeleteExperience: DeleteHandler;
  onChangeEducation: ChangeHandler;
  onAddEducation: AddHandler;
  onDeleteEducation: DeleteHandler;
  onLoadSample: () => void;
  onMakePdf: (() => void) | undefined;
  onReset: () => void;
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25in;
  width: 8.5in;
  min-width: 8.5in;
  max-width: 8.5in;

  h2 {
    font-family: 'Caveat', cursive;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ButtonsWrapper = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: stretch;
  margin-top: 20px;

  > * {
    flex-basis: calc(100% / 3);
  }
`;

function Form({
  resumeData,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onLoadSample,
  onMakePdf,
  onReset,
}: Props) {
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
        <Button onClick={onMakePdf}>Make PDF</Button>
        <Button resetBtn onClick={onReset}>
          Reset
        </Button>
      </ButtonsWrapper>
    </FormWrapper>
  );
}

export default Form;
