import React, { useState, useRef } from 'react';
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

  const componentRef = useRef<HTMLDivElement>(null);

  const handleChangePersonal = (e: React.ChangeEvent): void => {
    const { name, value } =
      (e.target as HTMLInputElement) || HTMLTextAreaElement;

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

  const handleChangeExperience = (e: React.ChangeEvent, id?: string): void => {
    const { name, value } = e.target as HTMLInputElement;

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

  const handleAddExperience = (): void => {
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

  const handleDeleteExperience = (id: string): void => {
    setResumeData((prevState) => {
      const updatedExperience = prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevState, experience: [...updatedExperience] };
    });
  };

  const handleChangeEducation = (e: React.ChangeEvent, id?: string): void => {
    const { name, value } = e.target as HTMLInputElement;

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

  const handleAddEducation = (): void => {
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

  const handleDeleteEducation = (id: string): void => {
    setResumeData((prevState) => {
      const updatedEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, education: [...updatedEducation] };
    });
  };

  const handleLoadSample = (): void => {
    setResumeData(sampleResume);
  };

  const handleReset = (): void => {
    setResumeData(emptyResume);
  };

  const makePdf: (() => void) | undefined = useReactToPrint({
    content: () => componentRef.current,
  });

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
