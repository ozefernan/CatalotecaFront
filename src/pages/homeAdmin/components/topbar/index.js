import React from 'react';
import { Styles } from './styles';
import { Nav } from 'react-bootstrap';

export default function topbar() {
  return (
    <Styles>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top">

          </Nav>
        </div>
      </div>
    </Styles>
  );
}
