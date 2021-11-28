import React, { Component } from 'react';
import Section from '../Auxiliary/Section';
import TextInput from '../Auxiliary/TextInput';
import TextArea from '../Auxiliary/TextArea';

class Personal extends Component {
  render() {
    const { info, onChange } = this.props;

    return (
      <Section title="Personal">
        <TextInput
          onChange={(e) => onChange(e)}
          placeholder="First name"
          name="firstName"
          value={info.firstName}
        />
        <TextInput
          onChange={(e) => onChange(e)}
          placeholder="Last name"
          name="lastName"
          value={info.lastName}
        />
        <TextInput
          onChange={(e) => onChange(e)}
          placeholder="Title"
          name="title"
          value={info.title}
        />
        <TextInput
          onChange={(e) => onChange(e)}
          placeholder="Street address"
          name="streetAddress"
          value={info.streetAddress}
        />
        <TextInput
          onChange={(e) => onChange(e)}
          placeholder="City / State / Zip"
          name="cityStateZip"
          value={info.cityStateZip}
        />
        <TextInput
          onChange={(e) => onChange(e)}
          placeholder="Phone number"
          name="phone"
          value={info.phone}
        />
        <TextInput
          onChange={(e) => onChange(e)}
          placeholder="Email address"
          name="email"
          value={info.email}
        />
        <TextArea
          onChange={(e) => onChange(e)}
          placeholder="Objective"
          name="objective"
          value={info.objective}
        />
      </Section>
    );
  }
}

export default Personal;
