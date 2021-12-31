import React from 'react';
import ExperienceItem from './ExperienceItem';
import Section from '../Auxiliary/Section';
import Button from '../Auxiliary/Button';
import { ExperienceData } from '../../types/data';
import {
  ChangeHandler,
  AddHandler,
  DeleteHandler,
} from '../../types/formHandlers';

interface Props {
  experienceData: ExperienceData;
  onChange: ChangeHandler;
  onAdd: AddHandler;
  onDelete: DeleteHandler;
}

function Experience({ experienceData, onChange, onAdd, onDelete }: Props) {
  const experienceItems = experienceData.map((itemData) => {
    return (
      <ExperienceItem
        key={itemData.id}
        id={itemData.id}
        itemData={itemData}
        onChange={onChange}
        onDelete={onDelete}
      />
    );
  });

  return (
    <Section title="Experience">
      {experienceItems}
      <Button addBtn onClick={onAdd}>
        +
      </Button>
    </Section>
  );
}

export default Experience;
