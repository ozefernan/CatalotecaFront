import React from 'react';
import { Styles } from './styles';
import { Container, Form, FormGroup, Button } from 'react-bootstrap';
import LogoBlue from '../../shared/images/logoBlue.svg';

export default function login() {
  return (
    <Styles>
      <section className="s-login">
        <Container>
          <Form>
            <img src={LogoBlue} alt="Cataloteca Logo" />
            <FormGroup>
              <Form.Control className="control" type="email" placeholder="Insira o seu e-mail de cadastro" />
              <Form.Control className="control" type="password" placeholder="Senha" />
            </FormGroup>
            <Button className="button" type="submit" href="/admin">
              Entrar
            </Button>
            <hr />
            <p className="pull-left b-item-mro-cadastre-se-txt-chamada-cadastro">Ainda não é cadastrado?</p>
            <a className="btn btn-default btn-lg btn-traco pull-right no-margin-top cadastro" href="#">Cadastre-se</a>
          </Form>
        </Container>
      </section>
    </Styles>
  );
}
