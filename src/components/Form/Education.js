import React, { Component } from 'react';
import EducationItem from './EducationItem';
import Section from '../Auxiliary/Section';
import Button from '../Auxiliary/Button';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { educationData, onChange, onAdd, onDelete } = this.props;

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
}

export default Education;
