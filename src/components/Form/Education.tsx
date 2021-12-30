import React from 'react';
import EducationItem from './EducationItem';
import Section from '../Auxiliary/Section';
import Button from '../Auxiliary/Button';
import { EducationData } from '../../data/interfaces';

interface Props {
  educationData: EducationData;
  onChange: React.ChangeEventHandler<HTMLInputElement> &
    ((e: React.ChangeEvent, id: string) => void);
  onAdd: React.MouseEventHandler<HTMLButtonElement>;
  onDelete: React.MouseEventHandler<HTMLButtonElement> & ((id: string) => void);
}

function Education({ educationData, onChange, onAdd, onDelete }: Props) {
  const educationItems = educationData.map((itemData) => {
    return (
      <EducationItem
        key={itemData.id}
        id={itemData.id}
        itemData={itemData}
        onChange={onChange}
        onDelete={onDelete}
      />
    );
  });

  return (
    <Section title="Education">
      {educationItems}
      <Button addBtn onClick={onAdd}>
        +
      </Button>
    </Section>
  );
}

export default Education;
