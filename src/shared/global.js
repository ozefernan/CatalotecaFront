import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Rubik,sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #858796;
    background-color: #fff;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    margin: 0!important;
    color: #22144a;
    font-family: Rubik,sans-serif;
    padding-bottom: .6em;
    font-weight: 500;
  }
`;
