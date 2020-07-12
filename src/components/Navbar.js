import React from 'react';
import { FaEnvelopeSquare, FaGithub } from 'react-icons/fa';

import NavStyles from '../styles/components/NavStyles';

const Navbar = () => {
  return (
    <NavStyles>
      <nav className='nav-fixed'>

        <div className='email-address highlight'>
          kianga722@gmail.com
        </div>

        <a href='/' className='brand'>
          <div>
            Andrew Kiang
          </div>
        </a>

        <div className='email-wrapper'>
          <a
            href='mailto:kianga722@gmail.com' className='email'
          >
            <FaEnvelopeSquare />
          </a>
          <span className='highlight'>
            kianga722@gmail.com
          </span>
        </div>
    
        <a
          href='https://github.com/kianga722' target='_blank'
          rel='noopener noreferrer'
          className='github'
        >
          <FaGithub className='fa-github' />
          GitHub
        </a>

      </nav>
    </NavStyles>
  )
}

export default Navbar;