import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../Auxiliary/Section';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';

const MainWrapper = styled.div``;

const Summary = styled.div``;

class Main extends Component {
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
        <Section title="Summary">
          <Summary>{personalData.summary}</Summary>
        </Section>
        <Section title="Experience">{experienceItems}</Section>
        <Section title="Education">{educationItems}</Section>
      </MainWrapper>
    );
  }
}

export default Main;
