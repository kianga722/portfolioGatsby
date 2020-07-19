import styled from 'styled-components';

const ProjectContainerStyles = styled.section`
  display: block;
  margin-top: 42px;

  text-align: center;

  .title {
    position: relative;
    display: inline-block;
    padding-bottom: 10px;
  
    color: ${props => props.theme.cardBackground};
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 0 1px 3px black;

    /* Underline from center effect */
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%) scaleX(0);
      transform-origin: 50% 50%;
      width: 100%;
      height: 3px;
      background-color: ${props => props.theme.underline};
      transition: transform 250ms;
    }
    
    &:hover {
      &::after {
        transform: translateX(-50%) scaleX(1);
      }
    }
  }

  .projects-display {
    margin: 10px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }


  @media (max-width: ${props => props.theme.mobileWidth}) {
      .projects-display {
        grid-template-columns: 1fr;
      }
  }
`

export default ProjectContainerStyles;