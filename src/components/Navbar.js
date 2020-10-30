import React from 'react';
import { FaEnvelopeSquare, FaGithub } from 'react-icons/fa';

import NavStyles from '../styles/components/NavStyles';

const Navbar = () => {
  return (
    <NavStyles>
      <nav className='nav-fixed'>

        <a href='/' className='brand'>
          <div>
            Andrew Kiang
          </div>
        </a>

        <div className='email-wrapper'>
          <a
            href='mailto:andrewk55@protonmail.com' className='email'
          >
            <FaEnvelopeSquare />
          </a>
          <span className='highlight'>
            andrewk55@protonmail.com
          </span>
        </div>
    
        <a
          href='https://github.com/kianga722' target='_blank'
          rel='noopener noreferrer'
          className='github'
        >
          <FaGithub className='fa-github' />
          <span>GitHub</span>
        </a>

      </nav>
    </NavStyles>
  )
}

export default Navbar;