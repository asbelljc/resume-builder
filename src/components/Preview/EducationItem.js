import React from 'react';
import styled from 'styled-components';

const EducationItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.0625in;

  & > span {
    font-size: 12px;
  }

  & > span:first-of-type {
    font-size: 16px;
  }
`;

const SchoolAndDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  span:nth-child(1) {
    font-size: 20px;
    font-weight: 600;
  }
`;

function EducationItem({ itemData }) {
  return (
    <EducationItemWrapper>
      <SchoolAndDateWrapper>
        <span>{itemData.school}</span>
        <span>
          {itemData.startDate} - {itemData.endDate}
        </span>
      </SchoolAndDateWrapper>
      <span>
        {itemData.degree}, {itemData.concentration}
      </span>
      <span>{itemData.location}</span>
    </EducationItemWrapper>
  );
}

export default EducationItem;
