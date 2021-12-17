import React, { Component } from 'react';
import Section from '../Auxiliary/Section';
import ItemCard from '../Auxiliary/ItemCard';
import TextInput from '../Auxiliary/TextInput';
import TextArea from '../Auxiliary/TextArea';

function Personal({ personalData, onChange }) {
  return (
    <Section title="Personal">
      <ItemCard>
        <TextInput
          onChange={(e) => onChange(e)}
          placeholder="First name"
          name="firstName"
          value={personalData.firstName}
        />
        <TextInput
          onChange={(e) => onChange(e)}
          placeholder="Last name"
          name="lastName"
          value={personalData.lastName}
        />
        <TextInput
          onChange={(e) => onChange(e)}
          placeholder="Title"
          name="title"
          value={personalData.title}
        />
        <TextInput
          onChange={(e) => onChange(e)}
          placeholder="Street address"
          name="streetAddress"
          value={personalData.streetAddress}
        />
        <TextInput
          onChange={(e) => onChange(e)}
          placeholder="City / State / Zip"
          name="cityStateZip"
          value={personalData.cityStateZip}
        />
        <TextInput
          onChange={(e) => onChange(e)}
          placeholder="Phone number"
          name="phone"
          value={personalData.phone}
        />
        <TextInput
          onChange={(e) => onChange(e)}
          placeholder="Email address"
          name="email"
          value={personalData.email}
        />
        <TextArea
          onChange={(e) => onChange(e)}
          placeholder="Summary"
          name="summary"
          value={personalData.summary}
        />
      </ItemCard>
    </Section>
  );
}

export default Personal;
