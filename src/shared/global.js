import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

/*---------------------------------------------

body {
  margin: 0 !important;
  padding: 0;
}

h1, h2, h3, h4 {
  margin: 0 !important;
  font-family: 'Rubik', sans-serif;
}

.h1 {
  padding-bottom: 1.2em;
  font-size: 3.286em;
}

.h2 {
  padding-bottom: 1.2em;
  font-size: 2.5em;
}

.h3 {
  padding-bottom: 1.2em;
  font-size: 1.643em;
}

.h4 {
  padding-bottom: 1.2em;
  font-size: 1.286em;
}

.titulo-secao {
  padding-bottom: .8em;
  line-height: 1.33em;
}

p, a, li {
  font-family: 'Rubik', sans-serif;
}

h3 {
  padding-bottom: 1.2em;
}

.s-padrao {
  padding-top: 6em;
  padding-bottom: 6em;
}

.active {
  color: #F7582C !important;
}

.half-padding-bottom {
  padding-bottom: 3em !important;
}

.half-padding-top {
  padding-top: 3em !important;
}

.no-padding {
  padding: 0 !important;
}

.no-padding-top {
  padding-top: 0 !important;
}

.no-padding-right {
  padding-right: 0 !important;
}

.no-padding-bottom {
  padding-bottom: 0 !important;
}

.no-padding-left {
  padding-left: 0 !important;
}

.no-margin {
  margin: 0 !important;
}

.no-margin-top {
  margin-top: 0 !important;
}

.no-margin-right {
  margin-right: 0 !important;
}

.no-margin-bottom {
  margin-bottom: 0 !important;
}

.no-margin-left {
  margin-left: 0 !important;
}

.border-bottom {
  border-bottom: 1px solid #e6ecf1 !important;
}

.border-top {
  border-top: 1px solid #e6ecf1 !important;
}

textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #ececec;
  border-radius:  6px;
  background: #f9f9f9;
  @include transition(.3s);

  &:focus {
    border: 1px solid #FF6F5A;
    box-shadow: none;
    outline: none;
  }

}

select {
  color: #9091AF!important;
}

*/

/*---------------------------------------------*/


* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

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
