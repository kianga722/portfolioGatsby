import styled from 'styled-components';

const AvatarStyles = styled.picture`
  margin: 2rem 0;
  display: flex;
  justify-content: center;

  img {
    width: 90px;
    height: 90px;

    border: 5px solid ${props => props.theme.text};
    border-radius: 50%;
    cursor: pointer;
  }

  &.jump {
    animation: wobble 1s both;
  }

  /* Wobble effect for coin */
  @keyframes wobble {
    0%,
    100% {
      -webkit-transform: translateY(0) rotate(0);
              transform: translateY(0) rotate(0);
      -webkit-transform-origin: 50% 50%;
              transform-origin: 50% 50%;
    }
    15% {
      -webkit-transform: translateY(-20px) rotate(6deg);
              transform: translateY(-20px) rotate(6deg);
    }
    30% {
      -webkit-transform: translateY(10px) rotate(-6deg);
              transform: translateY(10px) rotate(-6deg);
    }
    45% {
      -webkit-transform: translateY(-10px) rotate(3.6deg);
              transform: translateY(-10px) rotate(3.6deg);
    }
    60% {
      -webkit-transform: translateY(6px) rotate(-2.4deg);
              transform: translateY(6px) rotate(-2.4deg);
    }
    75% {
      -webkit-transform: translateY(-3px) rotate(1.2deg);
              transform: translateY(-3px) rotate(1.2deg);
    }
  }
`

export default AvatarStyles;