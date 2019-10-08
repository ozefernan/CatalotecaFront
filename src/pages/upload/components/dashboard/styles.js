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
    border: 1px solid #e3e6f0;
    border-radius: .35rem;
    text-align: center !important;
  }

  .s-card .card-body {
    padding: 0;
  }

  .s-card .card-body {
    font-size: 2.3em;
    font-weight: 500;
    color: #22144a;
    padding: .6em 0;
  }

  .s-card .card-header {
    border-top: 1px solid #e6ecf1;
    padding: .4em 0;
    margin: 0;
    background-color: #fff
  }

  .table th {
    font-size: 13px!important;
  }

  .table td, .table th {
    padding: .30rem;
    font-size: 13px!important;
  }
`;
