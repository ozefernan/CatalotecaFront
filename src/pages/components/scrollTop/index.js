import React from 'react';
import { Styles } from './styles';
import { MdKeyboardArrowUp } from 'react-icons/md'

export default function scrollTop() {
  return (
    <Styles>
      <a className="scroll-to-top rounded" href="#page-top">
        <MdKeyboardArrowUp size={5} title="Scroll Top" />
      </a>
    </Styles>
  );
}
