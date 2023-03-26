import React from 'react';

import IntroStyles from '../styles/components/IntroStyles';

const Intro = () => {
  return (
    <IntroStyles>
      <section>
        <p className='intro-title'>Hey! I'm</p>
        <p className='intro-name'><b>Andrew Kiang</b></p>
        <p>software developer for the web.</p>
      </section>
    </IntroStyles>
  )
}

export default Intro;