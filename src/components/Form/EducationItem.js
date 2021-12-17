import React from 'react';
import ItemCard from '../Auxiliary/ItemCard';
import TextInput from '../Auxiliary/TextInput';
import Button from '../Auxiliary/Button';

function EducationItem({ id, itemData, onChange, onDelete }) {
  return (
    <ItemCard>
      <Button deleteBtn onClick={() => onDelete(id)}>
        ×
      </Button>
      <TextInput
        onChange={(e) => onChange(e, id)}
        placeholder="School"
        name="school"
        value={itemData.school}
      />
      <TextInput
        onChange={(e) => onChange(e, id)}
        placeholder="Degree / Certificate / Diploma"
        name="degree"
        value={itemData.degree}
      />
      <TextInput
        onChange={(e) => onChange(e, id)}
        placeholder="Concentration"
        name="concentration"
        value={itemData.concentration}
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
    </ItemCard>
  );
}

export default EducationItem;
