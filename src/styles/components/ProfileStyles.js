import styled from 'styled-components';

const ProfileStyles = styled.header`
  display: block;
  text-align: center;

  .profile-name {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile-location {
    color: #f1fdff;
    font-weight: 700;

    span {
      display: inline-block;
      color: #ff6d38;

      animation: wobble-ver-left 5s both infinite;
      animation-delay: 5s;
    }
  }

  .profile-links {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    margin: 1.5rem auto;

    a {
      display: inline-block;
      padding: 0.375rem 0.75rem;
    
      background-color: #f1fdff;
      border: 1px solid black;
      border-radius: 0.25rem;
      transition: all 0.15s ease;

      &:hover {
        color: green;
        border-color: green;
        transform: scale(1.05);
      }

      .fa-icon {
        margin-right: 5px;
      }

      .fa-linkedin-square {
        color: rgb(0, 119, 181);
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


  @media (max-width: 750px) {
    .profile-links {
      display: block;
  
      a {
        margin: 5px 0;
      }
    }
    
  }
`

export default ProfileStyles;