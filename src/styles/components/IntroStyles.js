import styled from 'styled-components';

// For star animation
const OFFSET_X = 1000;
const OFFSET_Y = 500;
const multiple_box_shadow = (n) => {
  let value = `${Math.random()*OFFSET_X}px ${Math.random()*OFFSET_Y}px #FFF`;

  for (let i=2; i<=n; i+=1) {
    value = `${value} , ${Math.random()*OFFSET_X}px ${Math.random()*OFFSET_Y}px #FFF`;
  }

  return value;
}
const shadows_small = multiple_box_shadow(50);
const shadows_medium = multiple_box_shadow(20);
const shadows_big = multiple_box_shadow(10);


const IntroStyles = styled.article`
  position: relative;

  background: #000;
  overflow: hidden;

  // Stars animation
  @keyframes animStar {
    from {
      transform: translate(0, 0);
    }	
    
    to {
      transform: translate(100vw, -${OFFSET_Y}px);
    }	
  }

  #stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${shadows_small};
    animation: animStar 50s linear infinite;

    &:after {
      content: " ";
      position: absolute;
      top: ${OFFSET_Y}px;
      left: -100vw;
      width: 1px;
      height: 1px;
      background: transparent;
      box-shadow: ${shadows_small};
    }
  }
    
  #stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${shadows_medium};
    animation: animStar 100s linear infinite;
      
    &:after {
      content: " ";
      position: absolute;
      top: ${OFFSET_Y}px;
      left: -100vw;
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: ${shadows_medium};
    }
  }
    
  #stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${shadows_big};
    animation: animStar 150s linear infinite;
      
    &:after {
      content: " ";
      position: absolute;
      top: ${OFFSET_Y}px;
      left: -100vw;
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: ${shadows_big};
    }
  }
    

  section {
    padding: 7rem 1rem;

    p {
      color: ${props => props.theme.textDark};
      font-size: 1.5rem;
      line-height: 1.5;

      &:not(.intro-title) {
        font-weight: 700;
      }

      b {
        color: ${props => props.theme.navBackground};
        font-size: 2.3rem;
        font-weight: 700;
      }
    }
  }
  

  @media (min-width: 768px) {
    section {
      p {
        font-size: 1.8rem;

        b {
          font-size: 3rem
        }
      }
    }
  }
`

export default IntroStyles;