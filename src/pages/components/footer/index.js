/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IoLogoFacebook, IoLogoTwitter } from 'react-icons/io';
import { Styles } from './styles';
import LogoBlue from '../../../shared/images/logoBlue.svg';

export default function footer() {
  return (
    <Styles>
      <footer>
        <Container>
          <Row>
            <Col xs={12} sm={4} md={4}>
              <h3>Menu de acesso</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" title="Para compradores MRO">
                    Para compradores MRO
                  </a>
                </li>
                <li>
                  <a href="#" title="Para fabricantes">
                    Para fabricantes
                  </a>
                </li>
                <li>
                  <a href="#" title="Sobre a Cataloteca">
                    Sobre a Cataloteca
                  </a>
                </li>
                <li>
                  <a href="#" title="Contato">
                    Contato
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <h3>Produtos MRO</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" title="Para compradores MRO">
                    Para compradores MRO
                  </a>
                </li>
                <li>
                  <a href="#" title="Para fabricantes">
                    Cadastrar produtos
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <h3>Contato</h3>
              <div className="footer-dados-contato">
                <p>
                  <a href="#" title="Envie-nos um e-mail">
                    contato@cataloteca.com.br
                  </a>
                </p>
                <p>
                  <a href="#" title="Ligue para nós">
                    +55 11 5555-0000
                  </a>{' '}
                  |
                  <a href="#" title="Ligue para nós">
                    +55 19 9999-0000
                  </a>
                </p>
                <p>
                  <a href="#" title="Veja o endereço no mapa">
                    Alameda Mamoré, 911 - Alphaville Industrial, Barueri - SP,
                    06454-040
                  </a>
                </p>
                <ul
                  className="list-inline footer-menu-social"
                  title="Visite nossa página no Twitter"
                >
                  <li className="footer-menu-social-item">
                    <a href="#" title="Visite nossa página no Facebook">
                      <IoLogoFacebook
                        size={30}
                        color="#ff6f5a"
                        tilte="Icone Facebook"
                      />
                      <span>Cataloteca</span>
                    </a>
                  </li>
                  <li
                    className="footer-menu-social-item"
                    title="Visite nossa página no Facebook"
                  >
                    <a href="#" title="Siga-nos no Twitter">
                      <IoLogoTwitter
                        size={30}
                        color="#ff6f5a"
                        tilte="Icone Twitter"
                      />
                      <span>Cataloteca</span>
                    </a>
                  </li>
                  <li />
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12}>
              <div className="footer-logo">
                <a href="#" title="Cataloteca">
                  <img src={LogoBlue} alt="LogoCataloteca" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </Styles>
  );
}
