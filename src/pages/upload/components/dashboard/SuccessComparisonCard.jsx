import React, { Component } from 'react';
import { Row, Col, Card, Accordion, Form, Button } from 'react-bootstrap';
import { MdDone, MdPlaylistAddCheck, MdExpandMore, MdCompareArrows } from "react-icons/md";

// function SuccessComparisonCard(props) {
export default class SuccessComparisonCard extends Component {
  constructor(props) {
    super();
  }

  /* CHAMADA PARA O PROCESSO MANUAL */
  processManual = () => {
    /* const option = document.getElementById('select').value;

    api
      .post('/', {}, {})
      .then(response => {
        this.updateResult(option);
      })
      .catch(error => {
        console.log(error);
      }); */
    console.log('entrou');
    const option = document.getElementById('card-remove');
    option.style.animationName = 'moveCard';
  };


  /* ROTAÇÃO DO ICONE DE DROPDOWN */
  rotationIcon = () => {
    const icon = document.getElementById('selector');
    icon.classList.toggle('rotate-down');
  };


  /* HABILITA/DESABILITA BOTAO DE ENVIO MANUAL */
  setDesabled = () => {
    const options = document.getElementById('select').value;
    const buttonSelect = document.getElementById('button-select');
    if (!options) {
      // buttonSelect.style.animationName = 'remove';
      buttonSelect.style.opacity = '0';
    } else {
      // buttonSelect.style.animationName = 'move';
      buttonSelect.style.opacity = '1';
    }
  };

  render() {
    const { register, reference } = this.props;

    return (
        <Accordion defaultActiveKey="0">
          <Card
            className="card border-left-success h-100 py-2 mb-4"
            id="card-remove"
          >
            <Card.Body className="card-body">
              <Row className="no-gutters align-items-center bar-top">
                <Col sm={0} className="text-align-left">
                  <button className="btn btn-tag btn-success">
                    <MdDone size={20} />
                  </button>
                </Col>
                <Col
                  sm={2}
                  className="col-sm mb-sm-0 text-align-left margin-left-15"
                >
                  { reference }
                </Col>
                <Col
                  mb={2}
                  className="col-sm mb-sm-0 text-align-left margin-left-20"
                >
                  { register.target }
                </Col>
                <Col sm={0} className="align-items">
                  <span className="" />
                </Col>
                <Col sm={0} className="text-align-center margin-left-15">

                  {/* ALTERA PARA UM AUTOCOMPLETE */}
                  <Form.Group controlId="formGridState">
                    <Form.Control
                      id="select"
                      as="select"
                      onChange={this.setDesabled}
                    >
                      <option selected value="">
                        ...
                      </option>
                      <option value="1 ABRAC AJUST 19 27X14MM AC ZN">
                        1 ABRAC AJUST 19 27X14MM AC ZN
                      </option>
                      <option value="2 ABRAC AJUST 19 27X14MM AC ZN">
                        2 ABRAC AJUST 19 27X14MM AC ZN
                      </option>
                      <option value="3 ABRAC AJUST 19 27X14MM AC ZN">
                        3 ABRAC AJUST 19 27X14MM AC ZN
                      </option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Button
                  id="button-select"
                  variant="outline-success"
                  className="button-select"
                  type="submit"
                  onClick={this.processManual}
                >
                  <MdPlaylistAddCheck size={20} />
                </Button>
                <Col sm={1} className="text-align-center">
                  Distância <br/>
                  { register.distance }
                </Col>
                <Col sm={1} className="text-align-center">
                  Similaridade <br/>
                  { register.similarity } %
                </Col>
                <Col sm={1} className="text-align-center">
                  &Iacute;ndice&nbsp;Jaccard <br/>
                  { register.jaccardIndex } %
                </Col>
                <Accordion.Toggle
                  as={Button}
                  eventKey="1"
                  variant="none"
                  id="selector"
                  className="button-show rotate"
                  onClick={this.rotationIcon}
                >
                  <MdExpandMore size={25} color="#333" />
                </Accordion.Toggle>
              </Row>
            </Card.Body>

            {/* ESTE COLLAPSE DEVE FICAR DENTRO DE UM MAP DAS TOP OPÇÕES POR REGISTRO */}
            <Accordion.Collapse eventKey="1" as={Card.Footer}>
              <Card.Footer className="card-footer">
                <Row className="no-gutters align-items-center">
                  <Col sm={0} className="text-align-left">
                    <MdCompareArrows size={32} />
                  </Col>
                  <Col
                    sm={2}
                    className="col-sm mb-sm-0 text-align-left margin-left-15"
                  >
                    {/*ABRAC AJUST 19 27X14MM AC ZN*/}
                  </Col>
                  <Col
                    mb={2}
                    className="col-sm mb-sm-0 text-align-left margin-left-20"
                  >
                    {/*ABRACADEIRA TIPO AJUSTAVEL DIMENSAO 19-27 X 14 MM ACO
                    CARBONO ZINCADO RECARTILHADA / ROSCA SEM-FIM BRANCO*/}
                  </Col>
                  <Col sm={0} className="align-items" />
                  <Col sm={1} className="text-align-center">
                    Distância <br />
                    {/*123*/}
                  </Col>
                  <Col sm={1} className="text-align-center">
                    Similaridade <br />
                    {/*34 %*/}
                  </Col>
                  <Col sm={1} className="text-align-center">
                    &Iacute;ndice&nbsp;Jaccard <br />
                    {/*56 %*/}
                  </Col>
                </Row>
                <hr />
              </Card.Footer>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      );
  }
}
