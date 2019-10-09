import React, { Component } from 'react';
import api from "../../shared/services/api";

import { Styles } from './styles';
import Sidebar from '../homeAdmin/components/sideBar';
import Topbar from '../homeAdmin/components/topbar';
import Footer from '../components/footer';
import Scrolltop from '../components/scrollTop';
import Upload from './components/uploadCard';
import Dashboard from './components/dashboard';

export default class upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
  }

  async componentDidMount() {
  }

  handleUpload = (files) => {
    files.forEach(this.processUpload);
  };

  updateResult = (data) => {
    this.setState({
      result: data
    });
  };

  processUpload = files => {
    const data = new FormData();
    data.append('file', files);

    api.post("upload", data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }})
      .then(response => {
        this.updateResult(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  };

  render () {
    const { result } = this.state;

    return (
      <Styles>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div is="content">
              <Topbar />
              { !result ?
                  <Dashboard result={result}/>
                : <Upload onUpload={this.handleUpload}/>
              }
            </div>
          </div>
        </div>
        <Footer />
        <Scrolltop />
      </Styles>
    );
  }
}
