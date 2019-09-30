import styled from 'styled-components';

export const Styles = styled.div`
  #wrapper {
    display: flex;
  }

  #content-wrapper {
      background-color: #f8f9fc;
      width: 100%;
      overflow-x: hidden;
  }

  #content {
    flex: 1 0 auto;
  }

  #wrapper #content-wrapper {
    background-color: #f8f9fc;
    width: 100%;
    overflow-x: hidden;
  }

  #wrapper #content-wrapper #content {
    flex: 1 0 auto;
  }
`;
