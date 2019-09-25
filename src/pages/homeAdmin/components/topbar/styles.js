import styled from 'styled-components';

export const Styles = styled.div`
  #content {
    flex: 1 0 auto;
  }

  .flex-column {
    flex-direction: column!important;
  }

  .d-flex {
    display: flex!important;
  }

  .topbar {
    height: 4.375rem;
    box-shadow: 0 0 7px -4px rgba(0,0,0,.5);
  }

  .mb-4, .my-4 {
    margin-bottom: 1.5rem!important;
  }

  .bg-white {
    background-color: #fff!important;
  }

  .navbar-expand {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem;
  }
`;
