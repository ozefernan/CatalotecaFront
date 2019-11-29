/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Container, Col, Row, Form, Button, Card } from 'react-bootstrap';
import { MdRefresh } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { FaRegCalendarCheck, FaCheckCircle } from 'react-icons/fa';
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
              <section className="display-grid grid-template-area">
                <div className="titulo">
                  <div className="s-titulo">
                    <Row>
                      <Col xs={12}>
                        <h3>Registro de atividades</h3>
                      </Col>
                      <Col xs={12} className="mb-4">
                        <p className="s-titulo-descricao">
                          Veja aqui todos os uploads de produtos já feitos.{' '}
                          <br />
                          Para ver os produtos de um upload, clique em "Ver
                          detalhes".
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <Form className="s-pesquisa">
                    <div className="form-row">
                      <Col sm={12} md={7} lg={7}>
                        <Form.Group controlId="inputTitulo">
                          <Form.Label for="inputTitulo">Título</Form.Label>
                          <Form.Control
                            type="search"
                            className="form-control"
                            id="inputTitulo"
                            placeholder="Ex: Lâmpada de led"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={11} md={4} lg={3}>
                        <Form.Group controlId="inputStatus">
                          <Form.Label for="inputStatus">Status</Form.Label>
                          <Form.Control
                            as="select"
                            className="form-control"
                            id="inputState"
                          >
                            <option selected>...</option>
                            <option>...</option>
                            <option>...</option>
                            <option>...</option>
                            <option>...</option>
                          </Form.Control>
                          {/* <MdKeyboardArrowDown size={28} color="#ff6f5a" /> */}
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={1} md={1}>
                        <Form.Group className="button-search">
                          <Button
                            type="submit"
                            className="btn btn-search"
                            variant="search-form"
                            id="inputBtn"
                          >
                            <FiSearch size={22} color="#fff" alt="Buscar" />
                          </Button>
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <a href="#">Exibir filtro avançado</a>
                        </Form.Group>
                      </Col>
                    </div>
                  </Form>
                </div>
                <div className="info">
                  <Card className="card-info">
                    <Card.Body>
                      <Card.Title>Planilhas</Card.Title>
                      <Card.Text className="subtitle">
                        Dados atuais das planinhas no sistema:
                      </Card.Text>
                      <Row>
                        <Col sm={8}>
                          <Card.Text className="list">
                            <FaCheckCircle size={18} className="mr-10" />
                            Processadas
                          </Card.Text>
                        </Col>
                        <Col sm={4} className="text-right result">
                          15
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Card.Text className="list">
                            <MdRefresh size={18} className="mr-10" />
                            Em Analise
                          </Card.Text>
                        </Col>
                        <Col className="text-right result">15</Col>
                      </Row>
                      <Row>
                        <Col>
                          <Card.Text className="list">
                            <FaRegCalendarCheck size={18} className="mr-10" />
                            Agendadas
                          </Card.Text>
                        </Col>
                        <Col className="text-right result">15</Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              </section>
              <div className="s-uploads">
                <div className="s-uploads-cards">
                  {/* ESSES CARDS DEVEM FUNCIONAR COMO OS CARDS DE REGISTROS */}
                  {/* CARD CONLUIDO */}
                  <Card className="border-left-success">
                    <Card.Body className="card-body">
                      <Row className="card-row">
                        <Col xs={12} md={3} sm={1} className="text-align-left">
                          Planilha
                          <br />
                          <Button className="btn btn-tag btn-success">
                            Concluído
                          </Button>
                        </Col>
                        <Col xs={12} md={3} sm={1}>
                          Bruno Magalhães
                        </Col>
                        <Col xs={12} md={3} sm={1}>
                          150 (3 produtos <a href="/">Reprovados</a>)
                        </Col>
                        <Col xs={12} md={3} sm={1} className="text-align">
                          <a href="/">Ver detalhes</a>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  {/* CARD PROCESSANDO */}
                  <Card className="border-left-warning">
                    <Card.Body className="card-body">
                      <Row className="card-row">
                        <Col xs={12} md={3} sm={1}>
                          Planilha
                          <br />
                          <Button className="btn btn-tag btn-warning">
                            Em análise
                          </Button>
                        </Col>
                        <Col xs={12} md={3} sm={1}>
                          Bruno Magalhães
                        </Col>
                        <Col xs={12} md={3} sm={1}>
                          150 (3 produtos <a href="/">Reprovados</a>)
                        </Col>
                        <Col xs={12} md={3} sm={1} className="text-align">
                          <a href="/">Ver detalhes</a>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
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
