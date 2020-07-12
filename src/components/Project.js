import React from 'react';
import Tilt from 'react-tilt';
import {FaGithub} from 'react-icons/fa';

import ProjectStyles from '../styles/components/ProjectStyles';

const Project = ({
  site,
  repo,
  image,
  title,
  description
}) => {
  return (
    <Tilt
      className='show-on-scroll'
      options={{ scale: 1, reverse: true }}
    >
      <ProjectStyles>

        <a href={site} target='_blank' rel='noopener noreferrer' className='live'>
          <img src={image} alt='project screenshot' />
          <div className='live-overlay'>
          </div>
          <div className='view-wrapper'>
            <div className='viewSite'>
              View Site
            </div>
          </div>
        </a>

        <div className='project-links'>
          <a href={site} target='_blank' rel='noopener noreferrer' className='view'>
            view
          </a>
          <a href={repo}target='_blank' rel='noopener noreferrer' className='github'>
            <FaGithub className='fa-icon' />
            repo
          </a>
        </div>

        <h1 className='project-title highlight'>
          {title}
        </h1>
                
        <p className='project-info'>
          {description}
        </p>

        </ProjectStyles>
      </Tilt>
  )
}

export default Project;