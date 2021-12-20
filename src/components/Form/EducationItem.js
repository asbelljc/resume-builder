import React, { useEffect, useState } from 'react';
import ItemCard from '../Auxiliary/ItemCard';
import TextInput from '../Auxiliary/TextInput';
import Button from '../Auxiliary/Button';

function EducationItem({ id, itemData, onChange, onDelete }) {
  const [mountState, setMountState] = useState(false);

  useEffect(() => {
    setMountState(true);
  }, []);

  const animateThenUnmount = () => {
    setMountState(false);
    setTimeout(() => {
      onDelete(id);
    }, 250);
  };

  return (
    <ItemCard isMounted={mountState}>
      <Button deleteBtn onClick={animateThenUnmount}>
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
