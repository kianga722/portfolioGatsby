import React from 'react';
import sun from '../images/sun.svg';
import moon from '../images/moon.svg';
import useDarkMode from "use-dark-mode";

import DarkModeToggleStyles from '../styles/components/DarkModeToggleStyles';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <DarkModeToggleStyles>
      <button
        className='light-icon'
        onClick={darkMode.disable}
      >
        <img src={sun} alt="lightbulb" />
      </button>
      <span className="toggle-control">
        <input
          className="dmcheck"
          type="checkbox"
          checked={darkMode.value}
          onChange={darkMode.toggle}
          id="dmcheck"
        />
        <label htmlFor="dmcheck">
        </label>
      </span>
      <button
        className='dark-icon'
        onClick={darkMode.enable}
      >
        <img src={moon} alt="moon" />
      </button>
    </DarkModeToggleStyles>
  )
}

export default DarkModeToggle;