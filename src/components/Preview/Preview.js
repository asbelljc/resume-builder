import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';

const PreviewWrapper = styled.div``;

class Preview extends Component {
  render() {
    const { resumeData } = this.props;

    return (
      <PreviewWrapper>
        <Header personalData={resumeData.personal} />
        <Main
          personalData={resumeData.personal}
          experienceData={resumeData.experience}
          educationData={resumeData.education}
        />
      </PreviewWrapper>
    );
  }
}

export default Preview;
