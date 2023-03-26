import styled from 'styled-components';

const IntroStyles = styled.article`
  margin-top: 7rem;  
  position: relative;

  section {
    padding: 0 1rem;

    p {
      color: ${props => props.theme.text};
      font-size: 1.5rem;
      line-height: 1.5;

      &:not(.intro-title) {
        font-weight: 700;
      }

      b {
        color: ${props => props.theme.brandTextColor};
        font-size: 2.3rem;
        font-weight: 700;
      }
    }

    &:hover {
      p {
        b {
          transition: color 1s ease;
          color: ${props => props.theme.highlight};
        }
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