import React, { Component } from 'react';

import { Container, Card, Col, Row } from 'react-bootstrap';

import api from '../../../../shared/services/api'
import ComparisonCard from './ComparisonCard';
import { Styles } from './styles';

export default class dashboard extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      response: null
    };
  }

  async componentDidMount() {
    const { result } = this.props;
    api.post(`products/similarity/${result.id}`, {}, {
    })
    .then(response => {
      this.setState({ response });
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { response } = this.state;
    let qt = 0;
    let qt_accept = 0;
    let qt_reject = 0;

    if(response && response.data) {
      console.log(response.data);
      qt = response.data.length;
      qt_accept = response.data.filter(el => el.matched).length;
      qt_reject = qt - qt_accept
    }
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
                      {qt}
                  </Card.Body>
                  <Card.Header>
                      Lidos
                  </Card.Header>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                  <Card.Body>
                    {qt_accept}
                  </Card.Body>
                  <Card.Header>
                      Aceitos
                  </Card.Header>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                  <Card.Body>
                      0
                  </Card.Body>
                  <Card.Header>
                      Duplicados
                  </Card.Header>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                  <Card.Body>
                      {qt_reject}
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
              { response && response.data && response.data.map(reg => <ComparisonCard key={reg.reference} register={reg} />) }
            </div>
          </div>
        </Container>
      </Styles>
    )
  }
}
