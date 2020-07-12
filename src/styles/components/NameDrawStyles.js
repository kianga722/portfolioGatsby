import styled from 'styled-components';

function template(i) {
  return `
    &:nth-of-type(${i}) {
      animation: draw 300ms ${i*150}ms forwards;
    }
  `
}

function getAnimations(items) {
  let str = ''
  for (let i = 1; i <= items; i += 1) {
    str += template(i)
  }
  return str
}

const NameDrawStyles = styled.svg`
  max-width: 26rem;
  width: 100%;
  height: auto;
  fill: black;
  stroke: black;
  stroke-width: 4;

  cursor: pointer;
  
  tspan > tspan {
    stroke-dasharray: 1500;
    stroke-dashoffset: -1500;
    fill-opacity: 0;

    ${getAnimations(15)}
    
  }

  &:hover {
    text-shadow: 0 0 3px #ffcfcf;
  }

  @keyframes draw {
    100% {
      stroke-dashoffset: 0;
      fill-opacity: 1;
    }
  }


  @media (max-width: 750px) {
      max-width: 17rem;
  }
`

export default NameDrawStyles;