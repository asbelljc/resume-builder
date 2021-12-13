import React, { Component } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import ReactToPrint from 'react-to-print';
import Form from './Form/Form';
import Preview from './Preview/Preview';
import Button from './Auxiliary/Button';
import emptyResume from '../data/emptyResume';
import sampleResume from '../data/sampleResume';

const MainWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.25in;
  max-width: 17.5in;
  margin: 0 auto;
  padding: 0.25in 0 0.5in 0;

  @media (max-width: 17.25in) {
    flex-direction: column;
    align-items: center;
  }
`;

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = emptyResume;
    this.componentRef = React.createRef();

    this.handleChangePersonal = this.handleChangePersonal.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
    this.handleLoadSample = this.handleLoadSample.bind(this);
    this.handleReset = this.handleReset.bind(this);
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

  handleDeleteExperience(id) {
    this.setState((prevState) => {
      const updatedExperience = prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevState, experience: [...updatedExperience] };
    });
  }

  handleChangeEducation(e, id) {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const updatedEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        } else {
          return educationItem;
        }
      });

      return { ...prevState, education: [...updatedEducation] };
    });
  }

  handleAddEducation() {
    this.setState((prevState) => {
      return {
        ...prevState,
        education: [
          ...prevState.education,
          {
            id: uuid(),
            school: '',
            degree: '',
            concentration: '',
            location: '',
            startDate: '',
            endDate: '',
          },
        ],
      };
    });
  }

  handleDeleteEducation(id) {
    this.setState((prevState) => {
      const updatedEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, education: [...updatedEducation] };
    });
  }

  handleLoadSample() {
    this.setState(sampleResume);
  }

  handleReset() {
    this.setState(emptyResume);
  }

  render() {
    const makePdfButton = (
      <ReactToPrint
        trigger={() => <Button>Make PDF</Button>}
        content={() => this.componentRef}
      />
    );

    return (
      <MainWrapper>
        <Form
          resumeData={this.state}
          onChangePersonal={this.handleChangePersonal}
          onChangeExperience={this.handleChangeExperience}
          onAddExperience={this.handleAddExperience}
          onDeleteExperience={this.handleDeleteExperience}
          onChangeEducation={this.handleChangeEducation}
          onAddEducation={this.handleAddEducation}
          onDeleteEducation={this.handleDeleteEducation}
          onLoadSample={this.handleLoadSample}
          makePdfButton={makePdfButton}
          onReset={this.handleReset}
        />
        <Preview
          resumeData={this.state}
          ref={(element) => (this.componentRef = element)}
        />
      </MainWrapper>
    );
  }
}

export default Main;
