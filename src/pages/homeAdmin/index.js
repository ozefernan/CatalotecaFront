/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Styles } from './styles';
import Sidebar from './components/sideBar';
import Topbar from './components/topbar';
import Footer from '../components/footer';
import Scrolltop from '../components/scrollTop';

export default class HomeAdmin extends React.Component {
  render = () => {
    return (
      <Styles>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div is="content">
              <Topbar />
            </div>
          </div>
        </div>
        <Footer />
        <Scrolltop />
      </Styles>
    );
  };
}
