import styled, { css } from 'styled-components';

const dragActive = css`
  border: dashed 1px #13f42d;
`;

const dragReject = css`
  border: dashed 1px #f41313;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  padding: 4em 0;
  border: dashed 1px #ff6f5a;
  cursor: pointer;

  transition: height 0.7s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColors = {
  default: '#999',
  error: '#e57878',
  success: '#13f42d',
};

export const UploadMessage = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const Styles = styled.div`
  .container-fluid {
    padding-bottom: 5em;
  }

  .container,
  .container-fluid {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .mb-4,
  .my-4 {
    margin-bottom: 1.5rem !important;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a {
    color: #ff6f5a;
    text-decoration: none;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  .s-instrucoes-upload .s-instrucoes-upload-numero {
    color: #22144a;
    font-size: 23px;
    font-weight: 500;
    background: 0 0;
    border: 1px solid #ff6f5a;
    display: inline-block;
    text-align: center;
    border-radius: 3.5em;
    -moz-border-radius: 3.5em;
    -webkit-border-radius: 3.5em;
    line-height: 66px;
    width: 66px;
  }

  .s-instrucoes-upload .s-intrucoes-upload-descricao {
    font-size: 0.8em;
    margin-top: 10px;
    margin-bottom: 0;
  }

  .s-box-upload {
    margin: 2em 0;
    background-color: #fff;
    border-radius: 6px;
    border: solid 1px #e6ecf1;
  }

  .s-box-upload .card-header {
    margin: 0;
    padding: 1em 0 1em 1.2em;
    color: #22144a;
    border-bottom: solid 1px #e6ecf1;
    background: #fff;
  }

  .s-box-upload .card-body .s-box-upload-conteudo-ajuda {
    margin-top: 1.5em;
    font-size: 0.8em;
  }

  .s-box-upload p {
    margin-bottom: 0;
  }

  .text-center {
    text-align: center !important;
  }

  .flex-row {
    flex-direction: row !important;
  }

  .d-flex {
    display: flex !important;
  }

  .justify-content-center {
    justify-content: center !important;
  }
`;
