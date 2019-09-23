import React from 'react';
import { Styles } from './styles';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import LogoBlue from '../../../shared/images/logoBlue.svg';

export default function navbar() {
  return (
    <Styles>
      <Container className="navpesquisa">
        <Nav as={Row}>
          <Col xs={12} sm={3} md={3}>
            <Nav.Item>
              <Navbar.Brand href="#" ><img src={LogoBlue} alt="Logo Catalotecaa"/></Navbar.Brand>
            </Nav.Item>
          </Col>
          <Col xs={12} sm={6} md={7}>
            <Nav.Item>
              <Form inline>
                <FormControl className="input" type="text" placeholder="Pesquise por produtos, marca ou características..." />
                <Button variant="search-form"></Button>
              </Form>
            </Nav.Item>
          </Col>
          <Col xs={12} sm={3} md={1}>
            <Nav.Item>
              <Nav.Link href="/cadastro">Cadastro</Nav.Link>
            </Nav.Item>
          </Col>
          <Col xs={12} sm={3} md={1}>
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
          </Col>
        </Nav>
      </Container>
    </Styles>
  );
}