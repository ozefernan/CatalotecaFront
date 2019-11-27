import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { Styles } from './styles';

export default function scrollTop() {
  return (
    <Styles>
      <a className="scroll-to-top rounded" href="#page-top">
        <MdKeyboardArrowUp size={5} title="Scroll Top" />
      </a>
    </Styles>
  );
}
