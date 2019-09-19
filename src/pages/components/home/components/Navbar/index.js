import React from 'react';
import { Styles } from './styles';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Header} from 'react-bootstrap';
import catalotecaLogo from '../../../../images/cataloteca-logo.svg';

export default function navbar() {
  return (
    <Styles>
      <Container className="navpesquisa">
        <Nav as={Row}>
          <Col xs={12} sm={3} md={3}>
            <Nav.Item>
              <Navbar.Brand href="#" ><img src={catalotecaLogo} alt="Logo Cataloteca"/></Navbar.Brand>
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
      <Header>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <Nav>

              </Nav>
            </Col> 
          </Row>
        </Container>
      </Header>
    </Styles>
  );
}
