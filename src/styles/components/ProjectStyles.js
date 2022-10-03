import styled from 'styled-components';

const ProjectStyles = styled.article`
  width: 69%;
  margin: 1rem auto;
  padding: 10px;

  background-color: ${props => props.theme.cardBackground};
  border: 2px solid ${props => props.theme.border};
  border-radius: 5px;

  &.is-visible {
    transform: translateX(-3000px);
    animation: come-in 0.3s ease forwards;
  }

  @keyframes come-in {
    to { transform: translateX(0); }
  }

  &:hover {
    border: 2px solid ${props => props.theme.highlight};
    .project-title {
        color: ${props => props.theme.highlight};
      /* Underline from center effect */
      &::after {
        transform: translateX(-50%) scaleX(1);
      }
    }
    .project-info {
      color: ${props => props.theme.highlight};
    }
  }
  
  .fa-icon {
    margin-right: 5px;
  }

  .live {
    position: relative;
    height: unset;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

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

    .view {
      display: none;
    }

    .view,
    .github {
      padding: 0.375rem 0.75rem;
      margin: 5px 0;

      border: 1px solid ${props => props.theme.text};
      border-radius: 0.25rem;
      transition: all 0.15s ease;

      &:hover {
        color: ${props => props.theme.highlight};
        border-color: ${props => props.theme.highlight};
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
      background-color: ${props => props.theme.highlight};
      transition: transform 250ms;
    }
  }

  .project-info {
    padding-bottom: 1rem;
    text-align: left;
    line-height: 1.3rem;
  }

  @media (min-width: 1024px) {
    width: unset;

    /* Tilt Animations */
    --rX: 0;
    --rY: 0;
    transform: perspective(100rem) rotateX(calc(var(--rX) * 1deg)) rotateY(calc(var(--rY) * 1deg))!important;

    .live {
      height: 22vh;
    }

    .project-links .view {
      display: block;
    }
  }

`

export default ProjectStyles;