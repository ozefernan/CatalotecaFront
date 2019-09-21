import styled from 'styled-components';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export const Styles = styled.div`
  display: inline;
  box-sizing: border-box;
  margin: 5px 0;

  .navpesquisa {
    padding: 2em 0;
    background-color: #ffffff;
  }

  .navpesquisa .form-inline .form-control {
    width: 85%;
    margin-left: 0;
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .row .nav {
    margin-left: -15px;
    margin-right: -15px;
  }

  .form-control {
    width:85% !important;
    height: 47px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 6px;
    color: #555;
    background: #f9f9f9;
    border: 1px solid #ececec;
    display: inline-block;
    box-shadow: none;
  }

  .btn-search-form {
    margin-top: 0;
    height: 47px;
    width: 52px;
    margin-left: 1em;
    background-color: #FF6F5A;
  }

  .btn-primary:hover{

  }

  .header {
    height: 61;
    background: #f9f9f9;
    border-top: 1px solid #e6ecf1;
    border-bottom: 1px solid #e6ecf1;
  }

  .navbar-default {
    background-color: rgba(0,0,0,0);
    border-color: rgba(0,0,0,0);
  }

  .header .navbar-default {
    margin-bottom: 0;
    border: none;
  }

  img {
    max-width: 235px;
    height: auto;
  }
/*
  .form-inline {
    width: 100%;
    -webkit-appearance: none;
    box-sizing: border-box
  }

  .mr-auto {
    text-justify: left;
  }
*/
`;
