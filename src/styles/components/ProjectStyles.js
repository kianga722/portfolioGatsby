import styled from 'styled-components';

const ProjectStyles = styled.article`
  margin: 10px 10px 30px 10px;
  padding: 10px;

  background-color: #f1fdff;
  border: 1px solid black;
  border-radius: 5px;

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
      display: inline-block;
      padding: 0.375rem 0.75rem;
      margin: 5px 0;

      border: 1px solid black;
      border-radius: 0.25rem;
      transition: all 0.15s ease;

      &:hover {
        color: orange;
        border-color: orange;
        transform: scale(1.05);
      }
    }
  }

  .project-title {
    margin-top: 10px;
    margin-bottom: 15px;

    font-size: 2rem;
    font-weight: 700;

    &:hover {
      text-shadow: 0 0 3px #ffcfcf;
    }
  }

  .project-info {
    padding-bottom: 1rem;
    text-align: left;
    line-height: 1.3rem;
  }

  @media (max-width: 750px) {
    width: 69%;
    margin: 30px auto;

    .project-links .view {
      display: none;
    }
    
    .is-visible {
      transform: translateX(-3000px);
      animation: come-in 0.3s ease forwards;
    }

    @keyframes come-in {
      to { transform: translateX(0); }
    }
  }

`

export default ProjectStyles;