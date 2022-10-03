import styled from 'styled-components';

const ProfileStyles = styled.section`
  display: block;

  text-align: center;

  &:hover {
    .flip-front {
      transition: border 1s ease;
      border: 5px solid ${props => props.theme.highlight};
    }
    
    p {
      b {
        transition: color 1s ease;
        color: ${props => props.theme.highlight};
      }

      &.intro-name {
        b {
          color: ${props => props.theme.highlightDark};
        }
      }
    }

    .description {
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
`

export default ProfileStyles;