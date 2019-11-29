import styled from 'styled-components';

export const Styles = styled.div`
  dl,
  ol,
  ul {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    height: 100%;
  }

  /* flexbox da Nabar */
  .flex-direction {
    flex-direction: row;
  }

  .item {
    flex: 1;
  }

  /* -------------------- */

  .sidebar-default {
    background: rgb(69, 63, 180);
    background: radial-gradient(
      circle,
      rgba(69, 63, 180, 1) 20%,
      rgba(54, 43, 138, 1) 75%,
      rgba(55, 20, 148, 1) 100%
    );
  }

  .sidebar {
    width: 6.5rem;
    min-height: 100vh;
  }

  .sidebar-icon {
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    .sidebar {
      width: 14rem !important;
    }
    .d-md-block {
      display: block !important;
    }
    .d-md-none {
      display: none !important;
    }
    .nav-item a .btn.btn-sidebar-upload .sidebar-icon {
      margin-bottom: 0;
      margin-right: 0.9em;
    }
  }

  .sidebar .nav-item {
    position: relative;
  }

  .sidebar-dark .sidebar-brand {
    color: #fff;
  }

  .sidebar .sidebar-brand {
    height: 4.375rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
    padding: 1.5rem 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    z-index: 1;
  }

  .align-items-center {
    align-items: center !important;
  }

  .text-center {
    text-align: center !important;
  }

  .justify-content-center {
    justify-content: center !important;
  }

  .d-flex {
    display: flex !important;
  }

  .pt-3,
  .py-3 {
    width: 3em;
    padding-top: 1rem !important;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  .img-responsive {
    width: 160px;
  }

  .nav-item a .btn.btn-sidebar-upload {
    font-size: 0.875em;
  }

  .btn.btn-sidebar-upload {
    margin: 25px 8px;
    color: #fff;
    background-color: #ff6f5a;
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

  .sidebar-link {
    font-size: 14px;
  }

  #wrapper #content-wrapper {
    background-color: #f8f9fc;
    width: 100%;
    overflow-x: hidden;
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

  .sidebar-dark .nav-item .nav-link {
    color: rgba(255, 255, 255, 0.8);
    transition-duration: 0.5s;
  }

  .sidebar-dark .nav-item .nav-link:hover {
    color: rgba(255, 111, 90, 0.8);
  }

  .sidebar .nav-item .nav-link {
    display: block;
    text-align: left;
    padding: 1rem;
    width: 14rem;
  }
`;
