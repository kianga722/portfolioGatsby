import { createGlobalStyle } from 'styled-components';
import bgPic from '../images/nyc.jpg';

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

  /* Fonts */
  body {
    font-family: 'Source Sans Pro', sans-serif;
  }

  /* Links */
  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  /* Background Mousemove effect */
  body {
    background-color: black;
  }

  .page-wrap {
    position: absolute;
    width: 100vw;

    background: url(${bgPic});
    background-repeat: repeat;
    background-size: cover;
    background-attachment: fixed;

    --x: 0;
    --y: 0;
    background-position: calc(50% - var(--x)) calc(50% - var(--y));
  }

  /* Content */
  .content {
    max-width: 1000px;
    padding-top: 69px;
    margin: 0 auto 69px;
  }

  @media (max-width: 750px) {
    .page-wrap {
      background-size: unset;
      background-position: 75%;
    }
  }
`;

export default GlobalStyles;