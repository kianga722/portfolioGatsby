import { createGlobalStyle } from 'styled-components';

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Button Reset */
  button {
    background: transparent;
    border: none;
  }

  /* Fonts and Background */
  body {
    font-family: 'Arial', sans-serif;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};
  }

  /* Links */
  a {
    display: block;

    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  /* Content */
  .content {
    position: relative;

    background-color: ${props => props.theme.background};

    .content-top {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
    }
  }

  /* Dark Mode */
  body.dark-mode {
    color: ${props => props.theme.textDark};
    background-color: ${props => props.theme.backgroundDark};

    header:first-child {
      background-color: ${props => props.theme.navBackgroundDark};

      .nav-fixed {
        .email-wrapper {
          span.highlight {
            &::after {
              background-color: ${props => props.theme.highlightDark};
            }
            &:hover {
              color: ${props => props.theme.highlightDark};
            }
          }
        }
        .brand:hover,
        .email:hover,
        .github:hover {
          color: ${props => props.theme.highlightDark};
          border-color: ${props => props.theme.highlightDark};
        }
      }
    }
    
    .content {
      background-color: ${props => props.theme.backgroundDark};

      .content-top {
        article {
          a {
            color: ${props => props.theme.highlightDark};
            border-color: ${props => props.theme.highlightDark};

            &:hover {
              color: ${props => props.theme.highlightDark};
              border-color: ${props => props.theme.highlightDark};
            }
          }
        }
      }
      
      .profile {
        p {
          b {
            color: ${props => props.theme.textTitleDark};
          }
        }

        h1 {
          color: ${props => props.theme.textTitleDark};
          text-shadow: 0 1px 3px #242a7d;

          &::after {
            background-color: ${props => props.theme.textTitleDark};
          }
        }

        .about-me {
          background-color: ${props => props.theme.backgroundDark};

          .description {
            .skills {
              ul {
                li {
                  span {
                    color: ${props => props.theme.textTitleDark};
                  }
                }
              }
            }
          }
        }

        &:hover {
          .flip-front {
            border: 5px solid ${props => props.theme.highlightDark};
          }

          p {
            b {
              color: ${props => props.theme.highlightDark};
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
                    color: ${props => props.theme.highlightDark};
                  }
                }
              }
            }
          }
        }
      }

      .bg {
        background-image: linear-gradient(45deg, #000 50%, ${props => props.theme.navBackgroundDark} 50%);
      }
      
      section {
        .title {
          background: ${props => props.theme.backgroundDark};
          color: ${props => props.theme.textTitleDark};

          h1 {
            &::after {
              background-color: ${props => props.theme.textTitleDark};
            }
          }
        }

        .projects-display {
          article {
            background-color: ${props => props.theme.cardBackgroundDark};
            &:hover {
              border: 2px solid ${props => props.theme.highlightDark};
              .project-title {
                color: ${props => props.theme.highlightDark};
              }
              .project-info {
                color: ${props => props.theme.highlightDark};
              }
            }
            .project-links {
              .view,
              .github {
                border: 1px solid ${props => props.theme.textDark};
                &:hover {
                  color: ${props => props.theme.highlightDark};
                  border-color: ${props => props.theme.highlightDark};
                }
              }
            }
            .project-title {
              &::after {
                background-color: ${props => props.theme.highlightDark};
              }
            }
          }
        }
      }
    }

  }

  @media (min-width: 1000px) {
    .content {
      .content-top {
        padding: 1rem 0;
      }
    }
  }
`;

export default GlobalStyles;