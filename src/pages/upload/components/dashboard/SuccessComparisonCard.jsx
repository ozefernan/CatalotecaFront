import React, { Component } from 'react';
import { Row, Col, Card, Accordion, Form, Button } from 'react-bootstrap';
import { MdDone, MdPlaylistAddCheck, MdExpandMore } from "react-icons/md";

import _ from "lodash";

import ComparisonRow from './ComparisonRow';

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
    const { register } = this.props;

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
                  { register.reference }
                </Col>
                <Col
                  mb={2}
                  className="col-sm mb-sm-0 text-align-left margin-left-20"
                >
                  { register.comparisonRegister.product.longDescription }
                </Col>
                <Col sm={0} className="align-items">
                  <span className="" />
                </Col>
                <Col sm={0} className="text-align-center margin-left-15">

                  {/* TODO: Alterar para auto complete */}
                  {/* /Products */}
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
                  { register.comparisonRegister.distance }
                </Col>
                <Col sm={1} className="text-align-center">
                  Similaridade <br/>
                  { register.comparisonRegister.similarity } %
                </Col>
                <Col sm={1} className="text-align-center">
                  Jaccard <br/>
                  { register.comparisonRegister.jaccardIndex } %
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
                <ComparisonRow results={_.reverse(_.sortBy(register.results, r => r.similarity))}/>
                <hr />
              </Card.Footer>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      );
  }
}
