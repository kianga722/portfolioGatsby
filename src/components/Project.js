import React, {useRef} from 'react';
import {FaGithub} from 'react-icons/fa';

import ProjectStyles from '../styles/components/ProjectStyles';

const Project = ({
  site,
  repo,
  image,
  title,
  description
}) => {
  const cardEl = useRef(null);

  const handleMouseMove = (event) => {
    const cardPos = cardEl.current.getBoundingClientRect();
    const offsetX = event.clientX- cardPos.left;
    const offsetY = event.clientY - cardPos.top;
    const w = cardEl.current.clientWidth;
    const h = cardEl.current.clientHeight;
    let X = ((offsetX - (w/2)) / 3) / 3;
    let Y = (-(offsetY - (h / 2)) / 3) / 3;
 
    cardEl.current.style.setProperty('--rY', X.toFixed(2));
    cardEl.current.style.setProperty('--rX', Y.toFixed(2));
  }

  const handleMouseLeave = () => {
    cardEl.current.style.setProperty('--rY', 0);
    cardEl.current.style.setProperty('--rX', 0);
  }

  return (
    <ProjectStyles
      ref={cardEl}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='show-on-scroll'
    >

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
          <span>repo</span>
        </a>
      </div>

      <h1 className='project-title highlight'>
        {title}
      </h1>
              
      <p className='project-info'>
        {description}
      </p>
      
    </ProjectStyles>
  )
}

export default Project;