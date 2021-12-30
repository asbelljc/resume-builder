import React, { useEffect, useState } from 'react';
import ItemCard from '../Auxiliary/ItemCard';
import TextInput from '../Auxiliary/TextInput';
import Button from '../Auxiliary/Button';
import { ExperienceItemData } from '../../data/interfaces';

interface Props {
  id: string;
  itemData: ExperienceItemData;
  onChange: React.ChangeEventHandler<HTMLInputElement> &
    ((e: React.ChangeEvent, id: string) => void);
  onDelete: React.MouseEventHandler<HTMLButtonElement> & ((id: string) => void);
}

function ExperienceItem({ id, itemData, onChange, onDelete }: Props) {
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
    </ItemCard>
  );
}

export default ExperienceItem;
