import React from 'react';
import { Styles } from './styles';
import Sidebar from '../homeAdmin/components/sideBar';
import Topbar from '../homeAdmin/components/topbar';
import Footer from '../components/footer';
import Scrolltop from '../components/scrollTop';
import Upload from './components/uploadCard';

export default function upload() {
  return (
    <Styles>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div is="content">
            <Topbar />
            <Upload />
          </div>
        </div>
      </div>
      <Footer />
      <Scrolltop />
    </Styles>
  );
}
