import React from 'react';

import NameDrawStyles from '../styles/components/NameDrawStyles';

const NameDraw = ({
  handleDrawRestart
}) => {
  return (
    <NameDrawStyles
      viewBox="-12 0 656 156"
      onClick={handleDrawRestart}
    >
      <title>Andrew Kiang</title>
      <g
        stroke="none"
        fill="none"
        fillRule="evenodd"
        fillOpacity="0">
        <text
          id="AndrewKiang"
          stroke="#eeebeb"
          fill="black"
          fontFamily="Tangerine" fontSize="144"
        >
          <tspan x="3" y="109">
            <tspan>A</tspan>
            <tspan>n</tspan>
            <tspan>d</tspan>
            <tspan>r</tspan>
            <tspan>e</tspan>
            <tspan>w</tspan>
            <tspan> </tspan>
            <tspan>K</tspan>
            <tspan>i</tspan>
            <tspan>a</tspan>
            <tspan>n</tspan>
            <tspan>g</tspan>
          </tspan>
        </text>
      </g>
    </NameDrawStyles>
  )
}

export default NameDraw;