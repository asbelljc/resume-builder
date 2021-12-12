import React, { Component } from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.0625in;

  h2 {
    font-size: 32px;
    padding-left: 0.25in;
    padding-bottom: 0.0625in;
  }
`;

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, children } = this.props;

    return (
      <SectionWrapper>
        <h2>{title}</h2>
        {children}
      </SectionWrapper>
    );
  }
}

export default Section;
