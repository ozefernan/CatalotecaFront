import styled from 'styled-components';

export const Styles = styled.div`
  display: inline;

  .scroll-to-top {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    display: none;
    width: 2.75rem;
    height: 2.75rem;
    text-align: center;
    color: #fff;
    background: rgba(90, 92, 105, 0.5);
    line-height: 46px;
  }

  .rounded {
    border-radius: 0.35rem !important;
  }

  .scroll-to-top > .MdKeyboardArrowUp {
    font-weight: 800;
  }
`;
