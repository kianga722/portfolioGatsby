import styled from 'styled-components';

const AboutMeStyles = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;

  background-color: ${props => props.theme.background};

  h1 {
    position: relative;
    display: inline-flex;
    padding-bottom: 4px;

    font-size: 2rem;
    font-weight: 700;
    text-shadow: 0 1px 3px #b0b4ee;

    /* Underline from center effect */
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -5px;
      transform: translateX(-50%) scaleX(0);
      transform-origin: 50% 50%;
      width: 100%;
      height: 5px;
      background-color: ${props => props.theme.text};
      transition: transform 250ms;
    }
  }

  &:hover {
    h1 {
      &::after {
        transform: translateX(-50%) scaleX(1);
      }
    }
  }


  p {
    font-size: 1.5rem;

    b {
      font-weight: 700;
    }
  }

  .description {
    margin: 2rem auto 0;
    max-width: 450px;

    text-align: left;

    p {
      margin-bottom: 1rem;
      font-size: 1rem;
      line-height: 1.4;
    }

    .skills {
      ul {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-column-gap: 5rem;

        li {
          position: relative;
          margin-bottom: .8rem;
          
          span {
            position: relative;
            top: -1.5px;
            margin-right: 5px;

            color: ${props => props.theme.navBackground};
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 3rem;
    }
  }
`

export default AboutMeStyles;