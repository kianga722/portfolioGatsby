import styled from 'styled-components';

const NavStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  background-color: ${props => props.theme.navBackground};
  .nav-fixed {
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    margin: 0 auto;

    font-size: 1.2rem;

    .brand {
      display: flex;
      align-items: center;
    
      font-weight: 700;
    }

    .email-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      a.email {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span.highlight {
        margin-left: 7px;
        position: relative;
        top: 3px;
        padding-bottom: 6px;
        /* Underline from center effect */
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%) scaleX(0);
          transform-origin: 50% 50%;
          width: 100%;
          height: 2px;
          background-color: ${props => props.theme.highlight};
          transition: transform 250ms;
        }
        
        &:hover {
          color: ${props => props.theme.highlight};
          &::after {
            transform: translateX(-50%) scaleX(1);
          }
        }
      }
    }

    .github {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 7px;
      }
    }

    .email,
    .github {
      transition: all 0.15s ease;
    }


    .brand:hover,
    .email:hover,
    .github:hover {
      color: ${props => props.theme.highlight};
      border-color: ${props => props.theme.highlight};
      transform: scale(1.05);
    }
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    .nav-fixed {
      .brand {
        display: none;
      }
      .github {
        span {
          display: none;
        }
      }
    }
  }

`;

export default NavStyles;