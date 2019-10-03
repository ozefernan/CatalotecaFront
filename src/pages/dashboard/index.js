import React from 'react';
import { Styles } from './styles';
import Sidebar from '../homeAdmin/components/sideBar';
import Topbar from '../homeAdmin/components/topbar';
import Footer from '../components/footer';
import Scrolltop from '../components/scrollTop';
import Dashboard from './components/dashboard';

export default function upload() {
  return (
    <Styles>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div is="content">
            <Topbar />
            <Dashboard />
          </div>
        </div>
      </div>
      <Footer />
      <Scrolltop />
    </Styles>
  );
}
