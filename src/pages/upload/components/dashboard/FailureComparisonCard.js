/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Row, Col, Card, Accordion, Form, Button } from 'react-bootstrap';
import {
  MdWarning,
  MdPlaylistAddCheck,
  MdExpandMore,
  MdCompareArrows,
} from 'react-icons/md';
import Autosuggest from 'react-autosuggest';

import _ from 'lodash';

import { Styles } from './stylesCbox';
import ComparisonRow from './ComparisonRow';
import api from '../../../../shared/services/api';

const getSuggestionValue = suggestion => {
  return suggestion.longDescription;
};

const renderSuggestion = suggestion => (
  <span>{suggestion.longDescription}</span>
);

const calculateSuggestions = (value, suggestions, reactScope) => {
  const filter = value.trim().toLowerCase();
  console.log(filter);

  const newSuggestions =
    filter === null || filter === undefined || filter === ''
      ? []
      : suggestions.filter(prd =>
          prd.longDescription.toLowerCase().includes(filter)
        );
  reactScope.setState({
    suggestions: newSuggestions,
  });
};

const getSuggestions = (value, reactScope) => {
  api
    .get('products')
    .then(res => calculateSuggestions(value, res.data, reactScope));
};

export default class FailureComparisonCard extends Component {
  constructor(props) {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };
  }

  /* CHAMADA PARA O PROCESSO MANUAL */
  processManual = () => {
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

  /* autocomplete */
  onSuggestionsFetchRequested = ({ value }) => {
    console.trace(`fetch requested ... ${value}`);
    getSuggestions(value, this);
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsClearRequested = () => {
    console.trace('clear requested ... ');
    getSuggestions('', this);
  };
  /* autocomplete */

  componentDidMount = () => {
    getSuggestions('', this);
  };

  render() {
    const { value, suggestions } = this.state;
    const { register } = this.props;
    const matches = _.reverse(_.sortBy(register.results, r => r.similarity));
    const bestMatch = _.first(matches);

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a product',
      value,
      onChange: this.onChange,
    };

    return (
      <Accordion defaultActiveKey="0">
        <Card className="card border-left-warning h-100 py-2 mb-4">
          <Card.Body className="card-body">
            <Row className="no-gutters align-items-center bar-top">
              <Col sm={0} className="text-align-left">
                <button className="btn btn-tag btn-warning">
                  <MdWarning size={20} />
                </button>
              </Col>
              <Col
                xs
                mb={2}
                className="col-sm mb-sm-0 text-align-left margin-left-15"
              >
                {register.reference}
              </Col>
              <Col
                xs
                mb={2}
                className="col-sm mb-sm-0 text-align-left margin-left-20"
              >
                {bestMatch.target}
              </Col>
              <Col sm={0} className="align-items">
                <span className="" />
              </Col>
              <Col sm={1} className="text-align-center margin-right-left-20">
                Distância <br />
                {bestMatch.distance}
              </Col>
              <Col sm={1} className="text-align-center margin-right-left-20">
                Similaridade <br />
                {bestMatch.similarity} %
              </Col>
              <Col sm={1} className="text-align-center margin-right-left-20">
                Jaccard <br />
                {bestMatch.jaccardIndex} %
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
          <Card.Footer>
            <Styles>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
              />
            </Styles>
            <Button
              id="button-select"
              variant="outline-success"
              className="button-select"
              type="submit"
              onClick={this.processManual}
            >
              <MdPlaylistAddCheck size={20} />
            </Button>
          </Card.Footer>
          {/* ESTE COLLAPSE DEVE FICAR DENTRO DE UM MAP DAS TOP OPÇÕES POR REGISTRO */}
          <Accordion.Collapse eventKey="1" as={Card.Footer}>
            <Card.Footer className="card-footer">
              <ComparisonRow results={matches} />
            </Card.Footer>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
