/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Styles } from './styles';

export default function LoginForm() {
  return (
    <Styles>
      <section className="s-login">
        <Container>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <div className="item-mro">
                <div className="s-padrao">
                  <h2 className="h3">É um comprador MRO?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac
                    odio mauris justo.
                  </p>
                  <Row>
                    <Col md={10}>
                      <div className="b-conteudo-item-mro">
                        <Form className="form">
                          <Form.Group controlId="formLogin">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                              className="control"
                              type="email"
                              placeholder="Insira o seu e-mail de cadastro"
                            />
                          </Form.Group>
                          <Form.Group controlId="formLogin">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                              className="control"
                              type="password"
                              placeholder="Senha"
                            />
                          </Form.Group>
                          <div className="checkbox">
                            <Form.Check
                              type="checkbox"
                              label="Lembrar meu login"
                            />
                            <a
                              name="LembrarLogin"
                              className="btn btn-link pull-right no-padding-top no-margin-top"
                              herf="#"
                            >
                              Esqueci minha senha
                            </a>
                          </div>
                          <Button
                            variant=""
                            className="btn btn-default btn-lg btn-block"
                            type="submit"
                          >
                            Entrar
                          </Button>
                        </Form>
                        <div className="b-item-mro-cadastre-se">
                          <p className="traco-texto">ou</p>
                          <p className="pull-left b-item-mro-cadastre-se-txt-chamada-cadastro">
                            Ainda não é cadastrado?
                          </p>
                          <a className="btn btn-default btn-lg btn-traco pull-right no-margin-top">
                            Cadastre-se
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <div className="item-distribuidor text-center">
                <Row>
                  <Col md={{ span: 10, offset: 1 }}>
                    <div className="s-padrao">
                      <h2 className="h3">É um fabricante ou distribuidor?</h2>
                      <p>
                        Lorem ipsum dolor sit amet, sapien etiam, nunc amet
                        dolor ac odio mauris justo.
                      </p>
                      <div className="item-distribuidor-b-conteudo">
                        <h4 className="h4 text-center">Já tenho cadastro</h4>
                        <a
                          className="btn btn-lg btn-default btn-outline"
                          href="/admin/login"
                        >
                          Login
                        </a>
                        <div className="b-item-distribuidor-cadastre-se">
                          <p className="traco-texto">ou</p>
                          <h4 className="h4">Quero cadastrar minha empresa</h4>
                          <a className="btn btn-default btn-lg" href="#">
                            Cadastre-se
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
}
