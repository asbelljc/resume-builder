import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../Auxiliary/Section';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';

const MainWrapper = styled.div`
  h2 {
    font-weight: 600;
  }
`;

const Summary = styled.div``;

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personalData, experienceData, educationData } = this.props;

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
}

export default Main;
