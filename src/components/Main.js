import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { useReactToPrint } from 'react-to-print';
import Form from './Form/Form';
import Preview from './Preview/Preview';
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

function Main() {
  const [resumeData, setResumeData] = useState(emptyResume);

  const componentRef = useRef();

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;

    setResumeData((prevState) => {
      return {
        ...prevState,
        personal: {
          ...prevState.personal,
          [name]: value,
        },
      };
    });
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    setResumeData((prevState) => {
      const updatedExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        } else {
          return experienceItem;
        }
      });

      return { ...prevState, experience: [...updatedExperience] };
    });
  };

  const handleAddExperience = () => {
    setResumeData((prevState) => {
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
  };

  const handleDeleteExperience = (id) => {
    setResumeData((prevState) => {
      const updatedExperience = prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevState, experience: [...updatedExperience] };
    });
  };

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    setResumeData((prevState) => {
      const updatedEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        } else {
          return educationItem;
        }
      });

      return { ...prevState, education: [...updatedEducation] };
    });
  };

  const handleAddEducation = () => {
    setResumeData((prevState) => {
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
  };

  const handleDeleteEducation = (id) => {
    setResumeData((prevState) => {
      const updatedEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, education: [...updatedEducation] };
    });
  };

  const handleLoadSample = () => {
    setResumeData(sampleResume);
  };

  const handleReset = () => {
    setResumeData(emptyResume);
  };

  const makePdf = useReactToPrint({ content: () => componentRef.current });

  return (
    <MainWrapper>
      <Form
        resumeData={resumeData}
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onChangeEducation={handleChangeEducation}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
        onLoadSample={handleLoadSample}
        onMakePdf={makePdf}
        onReset={handleReset}
      />
      <Preview resumeData={resumeData} ref={componentRef} />
    </MainWrapper>
  );
}

export default Main;
