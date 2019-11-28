/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button } from 'react-bootstrap';
import { MdCloudUpload } from 'react-icons/md';
// import { IoIosSquareOutline } from 'react-icons/io';
import { Styles } from './styles';
import logopequeno from '../../../../shared/images/logotipo.svg';
import LogoWhite from '../../../../shared/images/logoWhite.svg';

export default function sideBar() {
  return (
    <Styles>
      <ul className="navbar-nav sidebar-default sidebar sidebar-dark accordion d-md-block">
        <li className="nav-item">
          <div className="d-md-none">
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href=""
              title="Logo Cataloteca"
            >
              <img
                className="img-responsive pt-3"
                src={logopequeno}
                alt="Cataloteca"
              />
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="d-none d-md-block">
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href=""
              title="Cataloteca"
            >
              <img
                className="img-responsive"
                src={LogoWhite}
                alt="Cataloteca"
              />
            </a>
          </div>
        </li>
        <li className="nav-item text-center">
          <a href="/upload" title="Upload de produtos">
            <Button className="btn btn-sidebar-upload">
              <MdCloudUpload
                className="sidebar-icon"
                size={20}
                color="#FFF"
                alt="Ícone de upload"
              />
              <span className="sidebar-link">Upload de produtos</span>
            </Button>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link ativo"
            href="/registros"
            title="Upload de produtos"
          >
            {/* <IoIosSquareOutline className="sidebar-icon" size={20} color="#FFF" alt="Ícone de upload"/> */}
            <span className="sidebar-link">Registros de atividades</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link ativo"
            href="/upload"
            title="Upload de produtos"
          >
            {/* <IoIosSquareOutline className="sidebar-icon" size={20} color="#FFF" alt="Ícone de upload"/> */}
            <span className="sidebar-link">Dashboard</span>
          </a>
        </li>
      </ul>
    </Styles>
  );
}
