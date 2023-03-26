import React from 'react';
import Avatar from './Avatar';

import AboutMeStyles from '../styles/components/AboutMeStyles';

const AboutMe = () => {
  return (
    <AboutMeStyles
      className='about-me'
    >
      <article>
        <h1>About Me</h1>

        <section className='description'>
          <p>I am a self-taught web developer that <b>loves building things</b>. The visual, frontend aspect of this space initially drew me in and I greatly enjoy <b>bringing designs to life.</b></p>

          <Avatar />

          <p>Currently, I <b>maintain code for a diverse variety of clients</b> at an e-commerce agency. In the past, I had the pleasure of working at an edtech start-up.</p>
          
          <div className='skills'>
            <p>Some <b>technologies</b> I've been using recently:</p>
            <ul>
              <li><span>&#9830;</span>JavaScript</li>
              <li><span>&#9830;</span>Shopify</li>
              <li><span>&#9830;</span>React</li>
              <li><span>&#9830;</span>HTML</li>
              <li><span>&#9830;</span>Vue</li>
              <li><span>&#9830;</span>CSS / Sass</li>
            </ul>
          </div>
        </section>
      </article>
    </AboutMeStyles>
  )
}

export default AboutMe;