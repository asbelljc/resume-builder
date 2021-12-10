import React, { Component } from 'react';
import styled from 'styled-components';

const EducationItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SchoolAndDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

class EducationItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { itemData } = this.props;

    return (
      <EducationItemWrapper>
        <SchoolAndDateWrapper>
          <span>{itemData.school}</span>
          <span>
            {itemData.startDate} = {itemData.endDate}
          </span>
        </SchoolAndDateWrapper>
        <span>
          {itemData.degree}, {itemData.concentration}
        </span>
        <span>{itemData.location}</span>
      </EducationItemWrapper>
    );
  }
}

export default EducationItem;
