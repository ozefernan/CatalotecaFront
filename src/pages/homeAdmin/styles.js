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

  .titulo {
    margin-left:8px;
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

  h3 {
    padding-bottom: 0.3em;
  }

  .container-fluid {
    padding-bottom: 5em;
  }

  .container .container-fluid {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
  }

  .form-group {
    padding-right: 5px;
    padding-left: 5px;
    margin-bottom: 2em;
  }

  .form-control {
    display: block;
    width: 100%;
    height: 47px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #6e707e;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #d1d3e2;
    border-radius: 0.35rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }

  .button-search {
    padding-top: 32px;
  }

  .btn.btn-search {
    color: #fff;
    background-color: #ff6f5a;
    height: 47px;
    display: block;
    width: 47px;
    margin: 0;
    border-radius: 6px;
  }

  a {
    color: #ff6f5a;
    text-decoration: none;
  }

  .s-uploads-cards {
    margin-bottom: 3rem !important;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #e3e6f0;
    border-radius: 0.35rem;

    padding-bottom: 0.5rem !important;
    padding-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
    height: 100% !important;

    -webkit-box-shadow: 0px 0px 22px 6px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: 0px 0px 22px 6px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 0px 22px 6px rgba(0, 0, 0, 0.07);
  }

  .border-left-success {
    border-left: 0.25rem solid #1cc88a !important;
    padding: 5px 0px 5px 0px;
  }

  .border-left-warning {
    border-left: 0.25rem solid #f6c23e !important;
    padding: 5px 0px 5px 0px;
  }

  .card-body {
    flex: 1 1 auto;
    padding: 0.5rem;
  }

  .card-row {
    align-items: center !important;
    margin-right: 0;
    margin-left: 0;
  }

  .btn.btn-tag {
    font-size: 0.8em;
    padding: 0.3em 0.8em;
    margin-top: 0.3em;
  }

  .btn-success {
    color: #fff;
    background-color: #1cc88a;
    border-color: #1cc88a;
  }

  .btn-warning {
    color: #fff;
    background-color: #f6c23e;
    border-color: #f6c23e;
  }

  .text-align {
    text-align: right;
  }

  .display-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .grid-template-area {
    grid-template-columns: 75% 25%;
    grid-template-areas: 'titulo info';
  }

  .titulo {
    grid-area: titulo;
  }

  .info {
    grid-area: info;
    height:190px
    margin-bottom: 20px;
  }

  .card-info {
    padding: 10px;
    -webkit-box-shadow: 0px 0px 22px 6px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: 0px 0px 22px 6px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 0px 22px 6px rgba(0, 0, 0, 0.07);
  }

  .card-header {
    padding: 10px;
  }

  .card-header {
    padding: 10px;
  }

  .card-title {
    padding: 0;
  }

  .subtitle {
    font-size: 0.85rem;
  }

  .list {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    color: #333333;
  }

  .result {
    color: #453fb4;
  }

  .mr-10 {
    margin-right: 5px;
    margin-bottom: 4px;
  }
`;
