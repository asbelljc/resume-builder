import React from 'react';
import ExperienceItem from './ExperienceItem';
import Section from '../Auxiliary/Section';
import Button from '../Auxiliary/Button';

function Experience({ experienceData, onChange, onAdd, onDelete }) {
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
