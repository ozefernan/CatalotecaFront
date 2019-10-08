import React, { Component } from 'react';
import api from '../../../../shared/services/api'

import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Styles } from './styles';


export default class dashboard extends Component {
  async componentDidMount() {
    const { result } = this.props;
    api.post(`products/similarity/${result.uid}`, {}, {
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

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
                <Card>
                  <Table responsive>
                    {this.criatePrimaryTable}
                    <thead>
                      <tr>
                        <th>Id level</th>
                        <th>Id Produto</th>
                        <th>Name</th>
                        <th>Descrição</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>ABRAC AJUST 19 27X14MM AC ZN</td>
                        <td>ABRACADEIRA TIPO AJUSTAVEL DIMENSAO 19-27 X 14 MM ACO CARBONO ZINCADO  RECARTILHADA / ROSCA SEM-FIM BRANCO</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>ABRAC U 70X100MMX2 1 2POL AC GALV</td>
                        <td>ABRACADEIRA TIPO U DIMENSAO 70 X 100 MM X 2,1/2 POLEGADAS ACO CARBONO GALVANIZADO</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>ABRAC U 70X100MMX2 1 2POL AC GALV</td>
                        <td>ABRACADEIRA TIPO U DIMENSAO 70 X 100 MM X 2,1/2 POLEGADAS ACO CARBONO GALVANIZADO</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>ABRAC U 70X100MMX2 1 2POL AC GALV</td>
                        <td>ABRACADEIRA TIPO U DIMENSAO 70 X 100 MM X 2,1/2 POLEGADAS ACO CARBONO GALVANIZADO</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>ABRAC U 70X100MMX2 1 2POL AC GALV</td>
                        <td>ABRACADEIRA TIPO U DIMENSAO 70 X 100 MM X 2,1/2 POLEGADAS ACO CARBONO GALVANIZADO</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>ABRAC U 70X100MMX2 1 2POL AC GALV</td>
                        <td>ABRACADEIRA TIPO U DIMENSAO 70 X 100 MM X 2,1/2 POLEGADAS ACO CARBONO GALVANIZADO</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </Styles>
    )
  }
}
