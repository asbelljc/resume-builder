import React from 'react';
import styled from 'styled-components';
import { ExperienceItemData } from '../../types/data';

interface Props {
  itemData: ExperienceItemData;
}

const ExperienceItemWrapper = styled.div`
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

const TitleAndDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  span:nth-child(1) {
    font-size: 20px;
    font-weight: 600;
  }
`;

function ExperienceItem({ itemData }: Props) {
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

export default ExperienceItem;
