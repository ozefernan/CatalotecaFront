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
    font: 15px 'Rubik', sans-serif !important;
    line-height: 1.5 !important;
    color: #9091AF;
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
