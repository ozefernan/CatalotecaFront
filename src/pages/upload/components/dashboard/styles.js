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


  /* Provisório */
.s-uploads-cards .card {
  padding-left: 1em;
}

.border-left-success {
  border-left: .25rem solid #1cc88a!important;
}

.border-left-warning {
  border-left: .25rem solid #FFE400!important;
}

.pb-2, .py-2 {
  padding-bottom: .5rem!important;
}

.pt-2, .py-2 {
  padding-top: .5rem!important;
}

.mb-4, .my-4 {
  margin-bottom: 0.8rem!important;
}

.h-100 {
  height: 100%!important;
}

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
}

.btn.btn-tag {
  font-size: .8em;
  padding: .3em .8em;
}

.align-items-center {
  align-items: center!important;
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

.btn-success {
  color: #fff;
  background-color: #1cc88a;
  border-color: #1cc88a;
}

.btn-warning {
  color: #fff;
  background-color: #F1D901;
  border-color: #F1D901;
}

.margin-left-15 {
  margin-left: 15px;
}

.margin-left-20 {
  margin-left: 20px;
}

.margin-right-left-20 {
  margin-right: 20px;
  margin-left: 20px;
}

.barra {
  content: "";
  position: absolute;
  display: block;
  width: 1px;
  height: 50%;
  top: 25% !important;
  bottom: 25% !important;
  background-color: #ced4d9;
  border-radius: 2px;
}

.align-items {
    align-items: none!important;
}
`;
