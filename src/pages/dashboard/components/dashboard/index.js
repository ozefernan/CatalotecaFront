import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Styles } from './styles';

export default class dashboard extends Component {
  render() {
    return (
      <Styles>
        <Container fluid>
          <div className="s-titulo">
            <Row>
              <Col xs={12}>
                <h3>Dashboard</h3>
              </Col>
              <Col xs={12} className="mb-4">
                <p className="s-titulo-descricao">
                  Veja os dados do seu Upload
                </p>
              </Col>
            </Row>
          </div>
          <div className="s-cards">
            <Row className="mb-5 s-card">
              <Col sm={3}>
                <Card>
                  <Card.Body>
                      243
                  </Card.Body>
                  <Card.Header>
                      Lidos
                  </Card.Header>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                  <Card.Body>
                      200
                  </Card.Body>
                  <Card.Header>
                      Aceitos
                  </Card.Header>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                  <Card.Body>
                      13
                  </Card.Body>
                  <Card.Header>
                      Duplicados
                  </Card.Header>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                  <Card.Body>
                      40
                  </Card.Body>
                  <Card.Header>
                      Rejeitados
                  </Card.Header>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="s-box-upload">
            <Row>
              <Col xs={12}>

              </Col>
            </Row>
          </div>
        </Container>
      </Styles>
    )
  }
}
