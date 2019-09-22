import styled from 'styled-components';

export const Styles = styled.div`
  p, a, li {
    font-family: "Rubik",sans-serif;
  }

  .s-padrao {
    padding-top: 6em;
    padding-bottom: 6em;
  }

  .s-login .item-mro .b-conteudo-item-mro .btn.btn-link {
    padding: 0;
  }

  .s-login .btn-lg, .s-login .btn-group-lg > .btn {
    min-width: 200px;
  }

  .btn.btn-lg, .btn-group-lg >.btn {
    padding-left: 1.929em !important;
    padding-right: 1.929em !important;
    line-height: 1.8em;
    font-size: 14px !important;
  }

  .btn-block {
    display: block !important;
    width: 100% !important;
  }

  .btn-default {
    color: #fff;
    background-color: #FF6F5A;
    border-color: #F7582C;
  }

  .s-login .traco-texto {
    margin-top: 2.5em;
    margin-bottom: 2em;
    position: relative;
    text-align: center;
  }

  .s-login .item-mro .traco-texto:before {
    content: "";
    position: absolute;
    display: block;
    width: 45%;
    height: 1px;
    top: 10px;
    right: 0;
    background-color: #ced4d9;
    border-radius: 2px;
  }

  .s-login .item-mro .traco-texto:after {
    content: "";
    position: absolute;
    display: block;
    width: 45%;
    height: 1px;
    top: 10px;
    background-color: #ced4d9;
    border-radius: 2px;
  }

  .s-login .item-mro .b-item-mro-cadastre-se-txt-chamada-cadastro {
    padding-top: .9em;
  }

  .h3 {
    padding-bottom: 1.2em;
    font-size: 1.643em;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: #22144A;
  }

  .h4 {
    padding-bottom: 1.2em;
    font-size: 1.286em !important;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: #22144A;
  }

  .form {
    padding-top: 2em !important;
  }

  label {
    display: inline-block;
    padding-bottom: .8em;
    font-weight: 600;
    color: #22144A;
    margin-bottom: 5px !important;
  }

  .control {
    box-shadow: none;
    display: block;
    width: 100%;
    height: 47px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.5;
    color: #555;
    background-color: #f9f9f9;
    background-image: none;
    border: 1px solid #ececec;
    border-radius: 6px;
  }

  .checkbox {
    position: relative !important;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .checkbox label {
    margin-top: 1.27px;
    min-height: 21px;
    margin-bottom: 0;
    font-size: 14px;
    color: #9091AF;
    font-weight: 400;
    cursor: pointer;
  }

  @media (min-width: 992px), col-md-offset-1 {
      margin-left: 8.33333%;
  }

  .s-login .item-distribuidor .item-distribuidor-b-conteudo .h4 {
    padding-bottom: 1.5em;
  }

  .btn.btn-link {
    padding: 0;
    color: #FF6F5A;
    font-size: 14px !important;
  }

  .btn.btn-outline {
    background-color: transparent;
    color: inherit;
    transition: all .5s;
  }

  .btn.btn-outline.btn-default {
    border-color: #F7582C !important;
  }

  .s-login .b-item-distribuidor-cadastre-se .traco-texto:before {
    content: "";
    position: absolute;
    display: block;
    width: 18%;
    height: 1px;
    top: 10px;
    right: 9em;
    background-color: #ced4d9;
    border-radius: 2px;
  }

  .s-login .b-item-distribuidor-cadastre-se .traco-texto:after {
    content: "";
    position: absolute;
    display: block;
    width: 18%;
    height: 1px;
    left: 9em;
    top: 10px;
    background-color: #ced4d9;
    border-radius: 2px;
  }

  .s-login .item-distribuidor-b-conteudo .h4 {
    padding-bottom: 1.5em;
  }

  .s-login .btn-lg, .s-login .btn-group-lg > .btn {
    min-width: 200px;
  }

  .btn.btn-lg, .btn-group-lg >.btn {
    padding-left: 1.929em;
    padding-right: 1.929em;
    line-height: 1.8em;
    font-size: 14px;
  }

  .text-center {
    text-align: center;
  }

  .pull-left {
    float: left !important;
  }

  .no-padding-top {
    padding-top: 0 !important;
  }

  .no-margin-top {
    margin-top: 0 !important;
  }
  .pull-right {
    float: right !important;
  }
`;
