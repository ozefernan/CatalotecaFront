import React from 'react';
import { Styles } from './styles';
import { Button } from 'react-bootstrap';
import logopequeno from '../../../../shared/images/logotipo.svg';
import LogoWhite from '../../../../shared/images/logoWhite.svg';
import { MdCloudUpload } from "react-icons/md";

export default function sideBar() {
  return (
    <Styles>
      <ul className="navbar-nav sidebar-default sidebar sidebar-dark accordion d-md-block">
        <li className="nav-item">
          <div className="d-md-none">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="" title="Logo Cataloteca">
              <img className="img-responsive pt-3" src={logopequeno} alt="Cataloteca"/>
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="d-none d-md-block">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="" title="Cataloteca">
              <img className="img-responsive" src={LogoWhite} alt="Cataloteca"/>
            </a>
          </div>
        </li>
        <li className="nav-item text-center">
          <a href="" title="Upload de produtos">
            <Button className="btn btn-sidebar-upload">
              <MdCloudUpload className="sidebar-icon" size={20} color="#FFF" alt="Ícone de upload"/>
              <span className="sidebar-link">Upload de produtos</span>
            </Button>
          </a>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Styles>
  );
}
