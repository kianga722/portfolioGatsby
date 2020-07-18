import styled from 'styled-components';

const ProjectStyles = styled.article`
  margin: 10px 10px 30px 10px;
  padding: 10px;
  background-color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.lightGray};
  border-radius: 5px;

  /* Tilt Animations */
  --rX: 0;
  --rY: 0;
  transform: perspective(100rem) rotateX(calc(var(--rX) * 1deg)) rotateY(calc(var(--rY) * 1deg));

  &:hover {
    border: 2px solid ${props => props.theme.red};
    .project-title {
        color: ${props => props.theme.red};
      /* Underline from center effect */
      &::after {
        transform: translateX(-50%) scaleX(1);
      }
    }
    .project-info {
      color: ${props => props.theme.red};
    }
  }
  
  a {
    display: block;
  }
  .fa-icon {
    margin-right: 5px;
  }

  .live {
    position: relative;
    height: 22vh;
    overflow: hidden;

    img {
      width: 100%;

      transition: all 1s ease;
    }

    .live-overlay {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      z-index: 2;

      background-color: black;
      opacity: 0;
      transition: all 0.5s ease;
    }

    .view-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .viewSite {
        padding: 10px;
        z-index: 2;

        color: white;
        font-weight: 700;
        border: 1px solid white;
        opacity: 0;
        transition: opacity 0.5s ease;
      }
    }

    &:hover .live-overlay {
      opacity: 0.7;
    }
    &:hover img {
      transform: scale(1.3);
      transition: all 1s ease;
    }
    &:hover .viewSite {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }

  .project-links {
    display: flex;
    justify-content: space-evenly;
    margin-top: 9px;

    .view,
    .github {
      padding: 0.375rem 0.75rem;
      margin: 5px 0;

      border: 1px solid black;
      border-radius: 0.25rem;
      transition: all 0.15s ease;

      &:hover {
        color: ${props => props.theme.red};
        border-color: ${props => props.theme.red};
        transform: scale(1.05);
      }
    }

    .github {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .project-title {
    margin: 0 auto;
    display: inline-block;
    position: relative;
    margin-top: 10px;
    margin-bottom: 15px;
    padding-bottom: 5px;

    font-size: 2rem;
    font-weight: 700;

    &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%) scaleX(0);
        transform-origin: 50% 50%;
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme.red};
        transition: transform 250ms;
      }
  }

  .project-info {
    padding-bottom: 1rem;
    text-align: left;
    line-height: 1.3rem;
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    width: 69%;
    margin: 1rem auto;

    .live {
      height: unset;
    }

    .project-links .view {
      display: none;
    }
    
    &.is-visible {
      transform: translateX(-3000px);
      animation: come-in 0.3s ease forwards;
    }

    @keyframes come-in {
      to { transform: translateX(0); }
    }
  }

`

export default ProjectStyles;