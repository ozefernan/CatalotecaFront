import React, { Component } from 'react';
import { Styles, DropContainer, UploadMessage } from './styles';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdCloudUpload } from "react-icons/md";
import Dropzone from 'react-dropzone';


export default class uploadCard extends Component {
  renderDragMessage = (isDragActive, isDragReject, file, files) => {
    if(!!file) {
      return <UploadMessage>
            <MdCloudUpload size={50} color="#ff6f5a" alt="Ícone de upload"/>
              Arquivo {files.name}
            </UploadMessage>
    }

    if(!isDragActive) {
      return  <UploadMessage>
              <MdCloudUpload size={50} color="#ff6f5a" alt="Ícone de upload"/>
              <p>Solte o arquivo em qualquer lugar desta tela ou
              <a href> faça upload</a></p>
              </UploadMessage>
    }

    if(isDragReject) {
      return <UploadMessage type="error">
        <MdCloudUpload size={50} color="#ff6f5a" alt="Ícone de upload"/>
        Arquivo não suportado
      </UploadMessage>
    }

    return  <UploadMessage type="success">
              <MdCloudUpload size={50} color="#ff6f5a" alt="Ícone de upload"/>
              Solte o arquivo em qualquer lugar
            </UploadMessage>
  }

  render() {
    const { onUpload } = this.props;

    return (
      <Styles>
        <Container fluid>
          <div className="s-titulo">
            <Row>
              <Col xs={12}>
                <h3>Adicione um novo produto</h3>
              </Col>
              <Col xs={12} className="mb-4">
                <p className="s-titulo-descricao">
                  Para adicionar um novo produto na plataforma Cataloteca é muito simples! <br/>
                  Siga os passos abaixo e envie seus produtos para aprovação da plataforma.
                </p>
              </Col>
            </Row>
          </div>
          <div className="s-instrucoes-upload">
            <Row>
              <Col xs={4} className="text-center">
                <span className="s-instrucoes-upload-numero">
                  1
                </span>
                <p className="s-intrucoes-upload-descricao">
                  Faça download da planilha <br/>
                  ou do arquivo XML modelo
                </p>
                <p className="s-intrucoes-upload-descricao">
                  <a href title="Download planilha modelo">
                    Download planilha modelo
                  </a>
                </p>
                <p className="s-intrucoes-upload-descricao">
                  <a href title="Download XML modelo">
                    Download XML modelo
                  </a>
                </p>
              </Col>
              <Col xs={4} className="text-center">
                <span className="s-instrucoes-upload-numero">
                  2
                </span>
                <p className="s-intrucoes-upload-descricao">
                  Preencha os dados de <br/>
                  acordo com o seu produto
                </p>
              </Col>
              <Col xs={4} className="text-center">
                <span className="s-instrucoes-upload-numero">
                  3
                </span>
                <p className="s-intrucoes-upload-descricao">
                  Faça upload do seu produto <br/>
                  e aguarde a publicação
                </p>
              </Col>
            </Row>
          </div>
          <div className="s-box-upload">
            <Row>
              <Col xs={12}>
                <Card>
                  <Card.Header>Upload</Card.Header>
                  <Card.Body>
                    <div className="d-flex flex-row">
                      <Col xs={12} className="justify-content-center">
                          <Dropzone accept="" onDropAccepted={onUpload}>
                            { ({ getRootProps, getInputProps, isDragActive, isDragReject }) =>
                              (
                              <DropContainer
                                {...getRootProps()}
                                isDragActive={isDragActive}
                                isDragReject={isDragReject}
                              >
                                <input {...getInputProps()} />
                                {this.renderDragMessage(isDragActive, isDragReject)}
                              </DropContainer>
                              )}
                          </Dropzone>
                      </Col>
                    </div>
                    <Row>
                      <Col xs={12} className="text-center s-box-upload-conteudo-ajuda">
                        Precisa de ajuda?
                        <a href title="Entre em contato"> Entre em contato.</a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </Styles>
    );
  }
}

