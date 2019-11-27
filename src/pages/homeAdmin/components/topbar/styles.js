import styled from 'styled-components';

export const Styles = styled.div`
  a {
    color: #ff6f5a;
    text-decoration: none;
  }

  .flex-column {
    flex-direction: column !important;
  }

  .d-flex {
    display: flex !important;
  }

  .topbar {
    height: 4.375rem;
    box-shadow: 0 0 7px -4px rgba(0, 0, 0, 0.5);
  }

  .mb-4,
  .my-4 {
    margin-bottom: 1.5rem !important;
  }

  .bg-white {
    background-color: #fff !important;
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
    padding: 0.5rem 1rem;
  }

  .topbar #sidebarToggleTop {
    height: 2.5rem;
    width: 2.5rem;
  }

  .btn.btn-link {
    color: #ff6f5a;
  }

  .mr-3,
  .mx-3 {
    margin-right: 1rem !important;
  }

  .rounded-circle {
    border-radius: 50% !important;
  }

  .btn-link {
    font-weight: 400;
    color: #4e73df;
    text-decoration: none;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    color: #858796;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.35rem;
    transition: color 0.15s;
  }

  .topbar-link-acesse {
    padding-left: 0.7em;
  }
`;
