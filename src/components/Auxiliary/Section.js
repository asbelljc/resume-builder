import React, { Component } from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.0625in;
`;

const Title = styled.h2``;

class Section extends Component {
  constructor(props) {
    super(props);
  }

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
