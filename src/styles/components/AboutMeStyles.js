import styled from 'styled-components';

const AboutMeStyles = styled.section`
  margin: 20rem auto 0;

  article {
    max-width: 450px;
    margin: 0 auto;
    padding: 4rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgba(48, 56, 60, 0.9);
    border-radius: 30px;  


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

              color: ${props => props.theme.text};
            }
          }
        }
      }
    }

    &:hover {
      h1 {
        transition: color 1s ease;
        color: ${props => props.theme.highlight};

        &::after {
          transform: translateX(-50%) scaleX(1);
          background-color: ${props => props.theme.highlight};
        }
      }

      p {
        b {
          transition: color 1s ease;
          color: ${props => props.theme.highlight};
        }
      }
      
      .description {
        .avatar {
          img {
            transition: border 1s ease;
            border: 5px solid ${props => props.theme.highlight};
          }
        }

        .skills {
          ul {
            li {
              span {
                transition: color 1s ease;
                color: ${props => props.theme.highlight};
              }
            }
          }
        }
      }
    }
  }

  

  @media (min-width: 768px) {
    article {
      p {
        font-size: 3rem;
      }
    }
  }
`

export default AboutMeStyles;