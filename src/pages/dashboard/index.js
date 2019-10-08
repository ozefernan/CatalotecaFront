import React, { Component } from 'react';
import api from "../../shared/services/api";
import upload from "../upload/index";

import { Styles } from './styles';
import Sidebar from '../homeAdmin/components/sideBar';
import Topbar from '../homeAdmin/components/topbar';
import Footer from '../components/footer';
import Scrolltop from '../components/scrollTop';
import Dashboard from './components/dashboard';

export default class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
       header: "Header from props...",
       content: "Content from props..."
    }
  }

  processCalculate = props => {
    api.post("products/similarity", props, {
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render () {
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
}
