import React, { Component } from 'react';
import styled from 'styled-components';

const ExperienceItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleAndDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

class ExperienceItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { itemData } = this.props;

    return (
      <ExperienceItemWrapper>
        <TitleAndDateWrapper>
          <span>{itemData.title}</span>
          <span>
            {itemData.startDate} - {itemData.endDate}
          </span>
        </TitleAndDateWrapper>
        <span>{itemData.company}</span>
        <span>{itemData.location}</span>
      </ExperienceItemWrapper>
    );
  }
}

export default ExperienceItem;
