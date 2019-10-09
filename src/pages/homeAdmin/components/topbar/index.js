import React from 'react';
import { Styles } from './styles';
import { Nav, Button } from 'react-bootstrap';
import { MdDehaze } from 'react-icons/md';

export default function topbar() {
  return (
    <Styles>
      <Nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top">
        <Button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <MdDehaze />
        </Button>
        <div className="d-md-none">
          <a href="/" title="Acessar portal cataloteca" className="topbar-link-acesse">Portal</a>
        </div>
        <div className="d-none d-md-block">
          <a href="#" title="" className="topbar-link-acesse">Acessar portal Cataloteca</a>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          </li>
          <li>
          </li>
          <li></li>
        </ul>
      </Nav>
    </Styles>
  );
}
