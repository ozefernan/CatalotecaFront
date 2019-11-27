import React from 'react';
import {
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { MdSearch } from 'react-icons/md';
import { Styles } from './styles';
import LogoBlue from '../../../shared/images/logoBlue.svg';

export default function navbar() {
  return (
    <Styles>
      <div className="c-menu-pesquisa">
        <Container>
          <Row>
            <Col xs={12} sm={3} md={3}>
              <Nav.Item className="logo">
                <a href="/" title="Cataloteca">
                  <img className="img-logo" src={LogoBlue} alt="Cataloteca" />
                </a>
              </Nav.Item>
            </Col>
            <Col xs={12} sm={6} md={7}>
              <Nav.Item>
                <Form inline>
                  <FormControl
                    className="input"
                    type="text"
                    placeholder="Pesquise por produtos, marca ou características..."
                  />
                  <Button variant="search-form">
                    <MdSearch size={28} color="#fff" />
                  </Button>
                </Form>
              </Nav.Item>
            </Col>
            <Col xs={12} sm={3} md={2}>
              <Nav className="list-inline pull-right c-menu-pesquisa-menu">
                <Nav.Item>
                  <Nav.Link href="/cadastro">Cadastro</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="active" href="/login">
                    Login
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    </Styles>
  );
}
