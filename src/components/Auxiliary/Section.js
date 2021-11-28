import React, { Component } from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section``;

const Title = styled.h2``;

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <SectionWrapper>
        <Title>{title}</Title>
        {children}
      </SectionWrapper>
    );
  }
}

export default Section;
