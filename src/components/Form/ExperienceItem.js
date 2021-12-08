import React, { Component } from 'react';
import styled from 'styled-components';
import TextInput from '../Auxiliary/TextInput';
import Button from '../Auxiliary/Button';

const ExperienceItemWrapper = styled.div``;

class ExperienceItem extends Component {
  render() {
    const { id, itemData, onChange, onDelete } = this.props;

    return (
      <ExperienceItemWrapper>
        <Button deleteBtn onClick={() => onDelete(id)}>
          ×
        </Button>
        <TextInput
          onChange={(e) => onChange(e, id)}
          placeholder="Title / Role"
          name="title"
          value={itemData.title}
        />
        <TextInput
          onChange={(e) => onChange(e, id)}
          placeholder="Company"
          name="company"
          value={itemData.company}
        />
        <TextInput
          onChange={(e) => onChange(e, id)}
          placeholder="Location"
          name="location"
          value={itemData.location}
        />
        <TextInput
          onChange={(e) => onChange(e, id)}
          placeholder="Start Date"
          name="startDate"
          value={itemData.startDate}
        />
        <TextInput
          onChange={(e) => onChange(e, id)}
          placeholder="End Date"
          name="endDate"
          value={itemData.endDate}
        />
      </ExperienceItemWrapper>
    );
  }
}

export default ExperienceItem;
