import styled from 'styled-components';

const AvatarFlipStyles = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 1rem auto;

  perspective: 1000px;

  cursor: pointer;

  .flip-inner {
    position: relative;
    width: 100%;
    height: 100%;

    transition: 0.6s;
    transform-style: preserve-3d;
  }

  .flip-front,
  .flip-back {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 0;
    left: 0;
    border: 5px solid #f1fdff;
    border-radius: 50%;

    backface-visibility: hidden;
  }

  .flip-front {
    z-index: 2;
    transform: rotateY(0deg)
  }

  .flip-back {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f1fdff;
    background: linear-gradient(90deg, #020024 2%, #1c3047 81%, #162f34 100%);

    transform: rotateY(180deg);

    span {
      font-size: 40px;
    }
  }

  &:hover .flip-inner {
    transform: rotateY(180deg);
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

  @media (max-width: 750px) {
      &:hover .flip-inner {
        transform: none;
      }
    
  }
`

export default AvatarFlipStyles;