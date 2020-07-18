import styled from 'styled-components';

const ProfileStyles = styled.header`
  display: block;
  text-align: center;

  .profile-intro {
    max-width: 690px;
    margin: 2rem auto;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      
      .flip-front {
        transition: border 1s ease;
        border: 5px solid ${props => props.theme.red};
      }
      p {
        b {
          transition: color 1s ease;
          color: ${props => props.theme.red};
        }
      }
    }
  }

  /* Element wobble effect */
  @keyframes wobble-ver-left {
    0%,
    18% {
      -webkit-transform: translateY(0) rotate(0);
              transform: translateY(0) rotate(0);
      -webkit-transform-origin: 50% 50%;
              transform-origin: 50% 50%;
    }
    3% {
      -webkit-transform: translateY(-20px) rotate(-6deg);
              transform: translateY(-20px) rotate(-6deg);
    }
    6% {
      -webkit-transform: translateY(10px) rotate(6deg);
              transform: translateY(10px) rotate(6deg);
    }
    9% {
      -webkit-transform: translateY(-10px) rotate(-3.6deg);
              transform: translateY(-10px) rotate(-3.6deg);
    }
    12% {
      -webkit-transform: translateY(6px) rotate(2.4deg);
              transform: translateY(6px) rotate(2.4deg);
    }
    15% {
      -webkit-transform: translateY(-3px) rotate(-1.2deg);
              transform: translateY(-3px) rotate(-1.2deg);
    }
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    .profile-intro {
      max-width: 290px;
      margin: 0 auto;
      flex-direction: column;
    }
  }
`

export default ProfileStyles;