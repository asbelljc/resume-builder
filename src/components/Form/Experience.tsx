import React from 'react';
import ExperienceItem from './ExperienceItem';
import Section from '../Auxiliary/Section';
import Button from '../Auxiliary/Button';
import { ExperienceData } from '../../data/interfaces';

interface Props {
  experienceData: ExperienceData;
  onChange: React.ChangeEventHandler<HTMLInputElement> &
    ((e: React.ChangeEvent, id: string) => void);
  onAdd: React.MouseEventHandler<HTMLButtonElement>;
  onDelete: React.MouseEventHandler<HTMLButtonElement> & ((id: string) => void);
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
