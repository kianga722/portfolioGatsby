import styled from 'styled-components';

const ProjectContainerStyles = styled.section`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  .bg {
    animation: slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(45deg, #000 50%, ${props => props.theme.navBackground} 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position: fixed;
    right:-50%;
    top:0;
    z-index:-1;
  }

  .bg2 {
    animation-direction: alternate-reverse;
    animation-duration:4s;
  }

  .bg3 {
    animation-duration:5s;
  }

  @keyframes slide {
    0% {
      transform:translateX(-25%);
    }
    100% {
      transform:translateX(25%);
    }
  }


  section {
    position: absolute;
    top: 0;
    display: block;
    padding-top: 4rem;
    margin: 0 auto;
    width: 100%;

    text-align: center;

    .title {
      display: inline-flex;
      padding: 1rem 2rem 1.5rem;

      background: ${props => props.theme.background};
      border-radius: 5px;

      h1 {
        position: relative;
        
        font-size: 2rem;
        font-weight: 700;

        /* Underline from center effect */
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -14px;
          transform: translateX(-50%) scaleX(0);
          transform-origin: 50% 50%;
          width: 100%;
          height: 5px;
          background-color: ${props => props.theme.text};
          transition: transform 250ms;
        }
      }
    }

    &:hover {
      .title {
        h1 {
          &::after {
            transform: translateX(-50%) scaleX(1);
          }
        }
      }
    }

    .projects-display {
      padding: 50px 0 0;
      display: grid;
      grid-template-columns: 1fr;
    }
  }
  

  @media (min-width: 1024px) {
    section {
      .projects-display {
        padding: 30px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-column-gap: 30px;
      }
    }
  }
`

export default ProjectContainerStyles;