import styled from 'styled-components';

export const Styles = styled.div`
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #e3e6f0 !important;
    border-radius: 0.35rem;
    text-align: center !important;

    animation-duration: 500ms;
    animation-delay: 250ms;
  }

  .s-card .btn {
    padding: 0;
  }

  .s-card .button-card-lid:focus {
    box-shadow: 0 0 0.5em #039be5;
  }

  .s-card .button-card-ace:focus {
    box-shadow: 0 0 0.5em #76ff03;
  }

  .s-card .button-card-dup:focus {
    box-shadow: 0 0 0.5em #ffff00;
  }

  .s-card .button-card-rej:focus {
    box-shadow: 0 0 0.5em #ff3d00;
  }

  .s-card .btn .card-header {
    color: #858796;
    border-bottom: none;
  }

  .s-card .card-body {
    font-size: 2.3em !important;
    font-weight: 500 !important;
    color: #22144a !important;
    padding: 0.6em 0 !important;
  }

  .s-card .card-header {
    border-top: 1px solid #e6ecf1 !important;
    padding: 0.4em 0 !important;
    margin: 0 !important;
    background-color: #fff !important;
  }

  .table th {
    font-size: 13px !important;
  }

  .table td,
  .table th {
    padding: 0.3rem;
    font-size: 13px !important;
  }

  /* Provisório */
  .s-uploads-cards .card-body {
    padding-left: 1em;
  }

  .border-left-success {
    border-left: 0.25rem solid #1cc88a !important;
  }

  .border-left-warning {
    border-left: 0.25rem solid #ffe400 !important;
  }

  .pb-2,
  .py-2 {
    padding-bottom: 0.5rem !important;
  }

  .pt-2,
  .py-2 {
    padding-top: 0.5rem !important;
  }

  .mb-4,
  .my-4 {
    margin-bottom: 0.8rem !important;
  }

  .h-100 {
    height: 100% !important;
  }

  .btn.btn-tag {
    font-size: 0.8em;
    padding: 0.3em 0.8em;
  }

  .align-items-center {
    align-items: center !important;
  }

  .align-items {
    align-items: flex-start !important;
  }

  .no-gutters {
    margin-right: 0;
    margin-left: 0;
  }

  .text-align-left {
    text-align: left;
  }

  .text-align-center {
    text-align: center;
  }

  .text-align-end {
    text-align: end;
  }

  .card-body {
    flex: 1 1 auto;
    padding: 1.25rem 1.25rem 1.25rem 0rem;
    font-size: 0.8rem;
  }

  .card-footer {
    padding: 1rem;
    flex: 1 1 auto;
    font-size: 0.8rem;
  }

  .card-footer .bar-top {
    border-top: 1px solid;
  }

  .btn-success {
    color: #fff;
    background-color: #1cc88a;
    border-color: #1cc88a;
  }

  .btn-warning {
    color: #fff;
    background-color: #f1d901;
    border-color: #f1d901;
  }

  .margin-left-15 {
    margin-left: 15px;
  }

  .margin-left-20 {
    margin-left: 20px;
  }

  /*.margin-right-left-20 {
  margin-right: 0px;
  margin-left: 0px;
}*/

  .barra {
    text-align: start;
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: #ced4d9;
    border-radius: 2px;
  }

  .traco-texto {
    margin-top: 2.5em;
    margin-bottom: 2em;
    position: relative;
    text-align: center;
  }

  .align-items {
    align-items: none !important;
  }

  .form-group {
    margin-bottom: 0;
  }

  .button-select {
    padding-left: 5px;
    padding-right: 5px;
    animation-duration: 500ms;
    animation-delay: 250ms;
    opacity: 0;
  }

  .form-control:focus {
    outline: none;
    box-shadow: none;
  }

  .button-show {
    margin: 0;
    padding: 0;
    background-color: #fff;
    border-color: #fff;
    outline: none;
  }

  .button-show:focus {
    outline: none;
    box-shadow: none;
  }

  .rotate {
    transition: 0.3s;
  }

  .rotate-down {
    transform: rotate(180deg);
  }

  @keyframes move {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes remove {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.9);
    }
  }

  @keyframes moveCard {
    from {
      opacity: 0;
      transform: translateX(0);
    }
    to {
      opacity: 1;
      transform: translateX(-100%);
    }
  }
`;
