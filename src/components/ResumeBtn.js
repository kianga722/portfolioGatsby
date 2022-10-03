import React from 'react';
import resumePDF from '../assets/pdfs/resume.pdf';

import ResumeBtnStyles from '../styles/components/ResumeBtnStyles';

const ResumeBtn = () => {
  return (
    <ResumeBtnStyles>
      <a href={resumePDF} target="_blank" rel="noreferrer">
        Resume
      </a>
    </ResumeBtnStyles>
  )
}

export default ResumeBtn;