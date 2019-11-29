/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Nav, Button, Container, Image } from 'react-bootstrap';
import { MdDehaze, MdKeyboardArrowDown } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa';
import { Styles } from './styles';
import image from '../../../../shared/images/imag.jpeg';

export default function topbar() {
  return (
    <Styles>
      <Nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top">
        <Container className="flex-direction">
          <div className="item">
            <Button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <MdDehaze />
            </Button>
            <div className="d-md-none">
              <a
                href="/"
                title="Acessar portal cataloteca"
                className="topbar-link-acesse"
              >
                Portal
              </a>
            </div>
            <div className="d-none d-md-block">
              <a href="#" title="" className="topbar-link-acesse">
                Acessar portal Cataloteca
              </a>
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" />
              <li />
              <li />
            </ul>
          </div>

          <div className=" form-inline">
            <a className="inline">Ajuda</a>
            <FaRegBell size={25} className="inline" color="#000000" />
            <Image src={image} />
            <p>Walter</p>
            <MdKeyboardArrowDown size={25} />
          </div>
        </Container>
      </Nav>
    </Styles>
  );
}
