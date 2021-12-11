import React, { Component } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { useReactToPrint } from 'react-to-print';
import Form from './Form/Form';
import Preview from './Preview/Preview';
import emptyResume from './Auxiliary/emptyResume';
import sampleResume from './Auxiliary/sampleResume';

const MainWrapper = styled.main`
  width: 8.5in;
  display: flex;
  gap: 0.25in;

  @media (max-width: 17.25in) {
    flex-direction: column;
  }
`;

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = emptyResume;
  }

  handleChangePersonal(e) {
    const { name, value } = e.target;

    this.setState((prevState) => {
      return {
        ...prevState,
        personal: {
          ...prevState.personal,
          [name]: value,
        },
      };
    });
  }

  handleChangeExperience(e, id) {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const updatedExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        } else {
          return experienceItem;
        }
      });

      return { ...prevState, experience: [...updatedExperience] };
    });
  }

  handleAddExperience() {
    this.setState((prevState) => {
      return {
        ...prevState,
        experience: [
          ...prevState.experience,
          {
            id: uuid(),
            title: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
          },
        ],
      };
    });
  }

  render() {
    return (
      <MainWrapper>
        <Form />
        <Preview />
      </MainWrapper>
    );
  }
}

export default Main;
