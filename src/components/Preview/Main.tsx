import React from 'react';
import styled from 'styled-components';
import Section from '../Auxiliary/Section';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';
import { PersonalData, ExperienceData, EducationData } from '../../types/data';

interface Props {
  personalData: PersonalData;
  experienceData: ExperienceData;
  educationData: EducationData;
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.25in;

  h2 {
    font-weight: 900;
    padding-left: 0;
  }
`;

const Summary = styled.div``;

function Main({ personalData, experienceData, educationData }: Props) {
  const experienceItems = experienceData.map((itemData) => {
    return <ExperienceItem key={itemData.id} itemData={itemData} />;
  });

  const educationItems = educationData.map((itemData) => {
    return <EducationItem key={itemData.id} itemData={itemData} />;
  });

  return (
    <MainWrapper>
      <Section title={'Summary'.toUpperCase()}>
        <Summary>{personalData.summary}</Summary>
      </Section>
      <Section title={'Experience'.toUpperCase()}>{experienceItems}</Section>
      <Section title={'Education'.toUpperCase()}>{educationItems}</Section>
    </MainWrapper>
  );
}

export default Main;
