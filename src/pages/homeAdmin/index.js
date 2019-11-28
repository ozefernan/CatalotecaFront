import React from 'react';

import { Container, Col, Row } from 'react-bootstrap';
import { Styles } from './styles';
import Sidebar from './components/sideBar';
import Topbar from './components/topbar';
import Footer from '../components/footer';
import Scrolltop from '../components/scrollTop';

export default function homeAdmin() {
  return (
    <Styles>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div is="content">
            <Topbar />
            <Container fluid>
              <div className="s-titulo">
                <Row>
                  <Col xs={12}>
                    <h3>Registro de Atividades</h3>
                  </Col>
                  <Col xs={12} className="mb-4">
                    <p className="s-titulo-descricao">
                      Veja os dados do seu Upload
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <Footer />
      <Scrolltop />
    </Styles>
  );
}
