import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 'Rubik', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #9091AF;
    background-color: #fff;
  }

  ul {
    list-style: none;
  }

`;
