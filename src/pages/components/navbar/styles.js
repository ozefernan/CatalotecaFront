import styled from 'styled-components';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export const Styles = styled.div`
  .c-menu-pesquisa {
    padding: 2em 0;
  }

  .c-menu-pesquisa a {
    color: #9091AF;
    text-decoration: none;
    background-color: transparent;
  }

  .c-menu-pesquisa .c-menu-pesquisa-menu {
    padding-top: 7px;
  }

  .img-logo {
    margin-top: 7px;
    max-width: 235px;
    height: auto;
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
    vertical-align: middle;
    box-shadow: none;
  }

  .btn-search-form {
    margin-top: 0;
    height: 47px;
    width: 52px;
    margin-left: 1em;
    background-color: #FF6F5A;
    border-radius: 6px;
  }

  .btn-search-form:hover {
    background-color: #F7582C;
  }

  .pull-right {
    float: right !important;
  }

  .active {
    color: #F7582C !important;
  }
`;
