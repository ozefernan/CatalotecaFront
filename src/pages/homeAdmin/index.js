import React from 'react';
import { Styles } from './styles';
import Sidebar from './components/sideBar';
import Topbar from './components/topbar';
import Footer from '../components/footer';
import Scrolltop from '../components/scrollTop';

export default function homeAdmin() {
  return (
    <Styles>
      <div id="wrapper">
        <Sidebar />
        <Topbar />
      </div>
      <Footer />
      <Scrolltop />
    </Styles>
  );
}
