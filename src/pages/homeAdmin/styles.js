import styled from 'styled-components';

export const Styles = styled.div`
  #wrapper {
    display: flex;
  }

  #content-wrapper {
    background-color: #f8f9fc;
    width: 100%;
    overflow-x: hidden;
  }

  #content {
    flex: 1 0 auto;
  }

  #wrapper #content-wrapper {
    background-color: #f8f9fc;
    width: 100%;
    overflow-x: hidden;
  }

  #wrapper #content-wrapper #content {
    flex: 1 0 auto;
  }

  .flex-column {
    flex-direction: column !important;
  }

  .d-flex {
    display: flex !important;
  }

  .react-autosuggest__container {
    position: relative;
  }

  .react-autosuggest__input {
    width: 240px;
    height: 30px;
    padding: 10px 20px;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
    border: 1px solid #aaa;
    border-radius: 4px;
  }

  .react-autosuggest__input--focused {
    outline: none;
  }

  .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    top: 51px;
    width: 280px;
    border: 1px solid #aaa;
    background-color: #fff;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 10px 20px;
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
  }

  /* ----------------------- BODY ----------------------- */

  .container-fluid {
    padding-bottom: 5em;
  }

  .container .container-fluid {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;
