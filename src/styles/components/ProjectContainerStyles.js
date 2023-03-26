import styled from 'styled-components';

const ProjectContainerStyles = styled.section`
  position: relative;
  max-width: 1200px;
  margin: 20rem auto 0;

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
          transition: color 1s ease;
          color: ${props => props.theme.highlight};

          &::after {
            transform: translateX(-50%) scaleX(1);
            background-color: ${props => props.theme.highlight};
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