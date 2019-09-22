import styled from 'styled-components';

export const Styles = styled.div`
  .s-login {
    background-color: #22144a;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .form-group {
    padding-bottom: 0px;
    margin-bottom: 0;
  }

  form, .form-group {
    width: 400px;
    background: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border-color: #ff3333;
  }

  img {
    width: 300px;
    margin: 10px 0 40px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  p {
    color: #ff3333;
    width: 100%;
    margin-bottom: 0;
    text-align: center;
  }

  input {
    flex: 1;
    height: 46px;
    margin-bottom: 20px;
    padding: 0 20px;
    color: #777;
    background-color: #f9f9f9;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    text-decoration: none;
    &::placeholder {
      color: #999;
    }
  }

  input:focus {
    outline: none !important;
    border:1px solid #F7582C;
    background-color: #f9f9f9;
    box-shadow: none;
  }

  button {
    color: #fff;
    font-size: 16px;
    background: #ff6f5a;
    height: 45px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }

  button {
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2), 0 5px 20px 0 rgba(0,0,0,0.19);
  }

  button:hover {
    background-color: #F7582C; /* Green */
    color: white;
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }

  a {
    font-size: 15px;
    font-weight: bold;
    color: #333 !important;
    text-decoration: none;
  }
`;
