import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import { ResumeData } from '../../types/data';

interface Props {
  resumeData: ResumeData;
}

type Ref = React.ForwardedRef<HTMLDivElement>;

const PreviewWrapper = styled.div`
  width: 8.5in;
  min-width: 8.5in;
  max-width: 8.5in;
  height: 11in;
  padding: 0.5in;
  position: sticky;
  top: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.3in;
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

// react-to-print requires forwardRef for use on functional components
const Preview = forwardRef(({ resumeData }: Props, ref: Ref) => {
  return (
    <PreviewWrapper ref={ref}>
      <Header personalData={resumeData.personal} />
      <Main
        personalData={resumeData.personal}
        experienceData={resumeData.experience}
        educationData={resumeData.education}
      />
    </PreviewWrapper>
  );
});

export default Preview;
