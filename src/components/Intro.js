import React from 'react';

import IntroStyles from '../styles/components/IntroStyles';

const Intro = () => {
  return (
    <IntroStyles>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      
      <section>
        <p className='intro-title'>Hey! I'm</p>
        <p className='intro-name'><b>Andrew Kiang</b>,</p>
        <p>software developer for the web.</p>
      </section>
    </IntroStyles>
  )
}

export default Intro;