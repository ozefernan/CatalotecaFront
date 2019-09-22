import React from 'react';
import { Styles } from './styles';
import { Container, Form, FormGroup, Button } from 'react-bootstrap';
import catalotecaLogo from '../../shared/images/cataloteca-logo.svg';

export default function login() {
  return (
    <Styles>
      <section className="s-login">
        <Container>
          <Form>
            <img src={catalotecaLogo} alt="Cataloteca Logo" />
            <FormGroup>
              <Form.Control className="control" type="email" placeholder="Insira o seu e-mail de cadastro" />
              <Form.Control className="control" type="password" placeholder="Senha" />
            </FormGroup>
            <Button variant="" type="submit">
              Entrar
            </Button>
            <hr />
            <p className="pull-left b-item-mro-cadastre-se-txt-chamada-cadastro">Ainda não é cadastrado?</p>
            <a className="btn btn-default btn-lg btn-traco pull-right no-margin-top" href="#">Cadastre-se</a>
          </Form>
        </Container>
      </section>
    </Styles>
  );
}
