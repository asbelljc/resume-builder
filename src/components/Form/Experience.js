import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem';
import Section from '../Auxiliary/Section';
import Button from '../Auxiliary/Button';

class Experience extends Component {
  render() {
    const { experienceData, onChange, onAdd, onDelete } = this.props;

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
          Add
        </Button>
      </Section>
    );
  }
}

export default Experience;
