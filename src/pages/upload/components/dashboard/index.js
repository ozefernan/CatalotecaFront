import React, { Component } from 'react';
// import api from '../../../../shared/services/api'

import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Styles } from './styles';
import { MdDone, MdWarning } from "react-icons/md";


export default class dashboard extends Component {
  /*async componentDidMount() {
    const result = this.props.result;
    api.post("products/similarity", result, {
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }*/

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
            <div className="s-uploads-cards mb-5">
              <div className="card border-left-success h-100 py-2 mb-4">
                <div className="card-body">
                  <Row className="no-gutters align-items-center">
                    <Col sm={0} className="text-align-left">
                      <button className="btn btn-tag btn-success"><MdDone size={20}/></button>
                    </Col>
                    <Col xs mb={2} className="col-sm mb-sm-0 text-align-left margin-left-15">
                      ABRACADEIRA TIPO AJUSTAVEL DIMENSAO 19-27 X 14 MM ACO CARBONO ZINCADO  RECARTILHADA / ROSCA SEM-FIM BRANCO
                    </Col>
                    <Col xs mb={2} className="col-sm mb-sm-0 text-align-left margin-left-20">
                      ABRAC AJUST 19 27X14MM AC ZN
                    </Col>
                    <Col sm={0} className="align-items">
                      <span className="barra"></span>
                    </Col>
                    <Col sm={1} className="text-align-center margin-right-left-20">
                      Distância <br/>
                      80
                    </Col>
                    <Col sm={1} className="text-align-center margin-right-left-20">
                      Similaridade <br/>
                      75,5 %
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="card border-left-success h-100 py-2 mb-4">
                <div className="card-body">
                  <Row className="no-gutters align-items-center">
                    <Col sm={0} className="text-align-left">
                      <button className="btn btn-tag btn-success"><MdDone size={20}/></button>
                    </Col>
                    <Col xs mb={2} className="col-sm mb-sm-0 text-align-left margin-left-15">
                      ABRACADEIRA TIPO AJUSTAVEL DIMENSAO 19-27 X 14 MM ACO CARBONO ZINCADO  RECARTILHADA / ROSCA SEM-FIM BRANCO
                    </Col>
                    <Col xs mb={2} className="col-sm mb-sm-0 text-align-left margin-left-20">
                      ABRAC AJUST 19 27X14MM AC ZN
                    </Col>
                    <Col sm={0} className="align-items">
                      <span className="barra"></span>
                    </Col>
                    <Col sm={1} className="text-align-center margin-right-left-20">
                      Distância <br/>
                      80
                    </Col>
                    <Col sm={1} className="text-align-center margin-right-left-20">
                      Similaridade <br/>
                      75,5 %
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="card border-left-warning h-100 py-2 mb-4">
                <div className="card-body">
                  <Row className="no-gutters align-items-center">
                    <Col sm={0} className="text-align-left">
                      <button className="btn btn-tag btn-warning"><MdWarning size={20}/></button>
                    </Col>
                    <Col xs mb={2} className="col-sm mb-sm-0 text-align-left margin-left-15">
                      ABRACADEIRA TIPO AJUSTAVEL DIMENSAO 19-27 X 14 MM ACO CARBONO ZINCADO  RECARTILHADA / ROSCA SEM-FIM BRANCO
                    </Col>
                    <Col xs mb={2} className="col-sm mb-sm-0 text-align-left margin-left-20">
                      ABRAC AJUST 19 27X14MM AC ZN
                    </Col>
                    <Col sm={0} className="align-items">
                      <span className="barra"></span>
                    </Col>
                    <Col sm={1} className="text-align-center margin-right-left-20">
                      Distância <br/>
                      80
                    </Col>
                    <Col sm={1} className="text-align-center margin-right-left-20">
                      Similaridade <br/>
                      75,5 %
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="card border-left-success h-100 py-2 mb-4">
                <div className="card-body">
                  <Row className="no-gutters align-items-center">
                    <Col sm={0} className="text-align-left">
                      <button className="btn btn-tag btn-success"><MdDone size={20}/></button>
                    </Col>
                    <Col xs mb={2} className="col-sm mb-sm-0 text-align-left margin-left-15">
                      ABRACADEIRA TIPO AJUSTAVEL DIMENSAO 19-27 X 14 MM ACO CARBONO ZINCADO  RECARTILHADA / ROSCA SEM-FIM BRANCO
                    </Col>
                    <Col xs mb={2} className="col-sm mb-sm-0 text-align-left margin-left-20">
                      ABRAC AJUST 19 27X14MM AC ZN
                    </Col>
                    <Col sm={0} className="align-items">
                      <span className="barra"></span>
                    </Col>
                    <Col sm={1} className="text-align-center margin-right-left-20">
                      Distância <br/>
                      80
                    </Col>
                    <Col sm={1} className="text-align-center margin-right-left-20">
                      Similaridade <br/>
                      75,5 %
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            {/*<Row>
              <Col xs={12}>
                <Card>
                  <Table responsive>
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
                    </tbody>
                  </Table>
                </Card>
              </Col>
            </Row>*/}
          </div>
        </Container>
      </Styles>
    )
  }
}
